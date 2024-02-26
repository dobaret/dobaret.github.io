// https://github.com/squidfunk/mkdocs-material/discussions/2498
document.addEventListener('DOMContentLoaded', function() {

    // Initialize map
    var map = L.map('map').setView([47.2186371, -1.5541362], 14);
    var markers = L.layerGroup().addTo(map); // Layer group to hold markers

    L.tileLayer('https://tiles-eu.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}', {
        ext: 'png',
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.addControl(new L.Control.Fullscreen());

    // Log the welcome message with a line break before it
    logMessage('Welcome!', 'info');

    // Object to store waiting times for each bus stop
    var waitingTimes = {};

    var centerMarker;

    // Initial addition of center marker
    addOrUpdateCenterMarker();

    // Function to get current latitude and longitude
    function getCurrentLatLng() {
        const center = map.getCenter();
        return { latitude: center.lat.toFixed(6), longitude: center.lng.toFixed(6) };
    }

    // Custom logging function
    function logMessage(message, level = 'info') {
        const currentTime = new Date().toLocaleTimeString();
        const formattedMessage = `${currentTime} - [${level.toUpperCase()}]: ${message}`;
        const messageElement = document.querySelector('.message');
        if (messageElement.innerHTML.trim() === '') {
            messageElement.innerHTML += formattedMessage;
        } else {
            messageElement.innerHTML += `<br>${formattedMessage}`;
        }
    }

    // Function to handle location found
    function onLocationFound(e) {
        // Define boundaries for Nantes
        var nantesBounds = L.latLngBounds([47.1539, -1.6932], [47.2735, -1.4553]);
        
        if (!nantesBounds.contains(e.latlng)) {
            // User is outside of Nantes
            logMessage('You are outside of Nantes. Redirecting you.', 'warning');
            logMessage('Welcome to the Château des ducs de Bretagne.');

            // Reset map view to default coordinates for Nantes
            map.setView([47.216307270286045, -1.5487563459527713], 15);
            // Add marker for default Nantes location
            L.marker([47.216307270286045, -1.5487563459527713]).addTo(markers)
                .bindPopup("You are here.").openPopup();
        } else {
            // User is inside Nantes, set view to their location
            map.setView(e.latlng, 15);
            // Add marker for user's location
            L.marker(e.latlng).addTo(markers)
                .bindPopup("You are here.").openPopup();
                logMessage("Geolocation successful.");
        }
    }

    // Function to handle location error
    function onLocationError(e) {
        // Show message when geolocation fails
        logMessage(`${e.message}`, 'error');
    }

    // Function to fetch bus stops
    function fetchBusStops() {
        var nantesBounds = L.latLngBounds([47.1539, -1.6932], [47.2735, -1.4553]);
        
        if (!nantesBounds.contains(map.getCenter())) {
            // User is outside of Nantes
            logMessage('You are trying to fetch bus stops outside of Nantes. Are you lost? If so, click Locate me.', 'warning');
            return;
        }

        var url = 'https://open.tan.fr/ewp/arrets.json/';
        if (map.getCenter()) {
            const { latitude, longitude } = getCurrentLatLng();
            var lat = latitude;
            var lng = longitude;
            url += lat + '/' + lng;
            logMessage('Fetching bus stops for ' + latitude + ' / ' + longitude + '...');
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const fetchPromises = data.map(stop => fetchBusStopDetails(stop));
                    Promise.all(fetchPromises)
                        .then(stopDetails => {
                            displayBusStops(stopDetails);
                        })
                })
                .catch(error => logMessage('Error fetching bus stops: ' + error, 'error'));
        } else {
            alert('Map center not available.');
        }
    }

    // Function to fetch bus stop details
    function fetchBusStopDetails(stop) {
        const codeLieu = stop.codeLieu;
        const libelle = stop.libelle;
        const secondUrl = 'https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_tan-arrets/records?select=stop_coordinates&where=stop_id%20%3D%20\'' + codeLieu + '\'';
        return fetch(secondUrl)
            .then(response => response.json())
            .then(secondData => {
                const lat = secondData.results[0].stop_coordinates.lat;
                const lon = secondData.results[0].stop_coordinates.lon;
                return { codeLieu, libelle, lat, lon };
            })
            .catch(error => {
                return { codeLieu, libelle, lat: null, lon: null }; // Return default values
            });
    }

    // Function to fetch waiting time and update popup content
    function fetchWaitingTime(codeLieu, libelle, lat, lon, marker) {
        const tempsUrl = 'https://open.tan.fr/ewp/tempsattente.json/' + codeLieu;
        fetch(tempsUrl)
            .then(response => response.json())
            .then(data => {
                // Filter and sort the data based on waiting times
                const filteredData = data.filter(item => item.temps !== "")
                                        .sort((a, b) => {
                                            if (a.temps === "proche") return -1;
                                            if (b.temps === "proche") return 1;
                                            return parseInt(a.temps) - parseInt(b.temps);
                                        });

                // Generating the table structure if there's data
                let tableContent = "";
                if (filteredData.length > 0) {
                    tableContent += `
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Line number</th>
                                        <th>Direction</th>
                                        <th>Waiting time</th>
                                    </tr>
                                </thead>
                                <tbody>`;

                    // Populating table rows with data
                    filteredData.forEach(item => {
                        let waitingTime = item.temps === "proche" ? "Coming!" : item.temps;
                        tableContent += `
                            <tr>
                                <td>${item.ligne.numLigne}</td>
                                <td>${item.terminus}</td>
                                <td>${waitingTime}</td>
                            </tr>`;
                    });

                    // Closing table tag
                    tableContent += `</tbody></table></div>`;
                } else {
                    tableContent = "<span>No transport found in the next hour.</span>";
                }

                // Creating the popup content with table or message
                const popupContent = `<div class="popup-content"><span class="libelle">${libelle} (${codeLieu})</span>${tableContent}</div>`;
                marker.setPopupContent(popupContent); // Update popup content
            })
            .catch(error => {
                logMessage(`Error fetching bus stop waiting time for ${codeLieu}: ${error}`, 'error');
            });
    }

    // Function to display bus stops on the map
    function displayBusStops(stopDetails) {
        logMessage(`Found ${stopDetails.length} bus stops in a 500m radius.`);

        // Clear previous markers
        markers.clearLayers();

        stopDetails.forEach(({ codeLieu, libelle, lat, lon }) => {
            if (lat && lon) {
                var redIcon = new L.Icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    shadowSize: [41, 41]
                });

                var marker = L.marker([lat, lon], { icon: redIcon }).addTo(markers);
                marker.bindPopup(`<div class="popup-content"><span class="libelle">${libelle} (${codeLieu})</span><span>Loading...</span></div>`); // Bind popup without opening
                fetchWaitingTime(codeLieu, libelle, lat, lon, marker);
            }
        });
    }

    // Function to clear the log
    function clearLog() {
        const messageElement = document.querySelector('.message');
        messageElement.innerHTML = '';
    }

    // Function to add or update center marker and update current latitude and longitude
    function addOrUpdateCenterMarker() {
        const center = map.getCenter();
        if (centerMarker) {
            centerMarker.setLatLng(center);
        } else {
            centerMarker = L.marker(center, {
                icon: L.divIcon({
                    className: 'center-marker',
                    html: '+'
                })
            }).addTo(map);
        }

        // Update HTML content of .current element
        const currentElement = document.querySelector('.current');
        const { latitude, longitude } = getCurrentLatLng();
        currentElement.innerHTML = `<strong>Latitude</strong>: ${latitude}<br><strong>Longitude</strong>: ${longitude}`;
    }

    // Event listener for locating the user when button is clicked
    document.getElementById('locateButton').addEventListener('click', function() {
        logMessage("Asking for your location.");
        map.locate({ setView: true, maxZoom: 15 });
    });

    // Event listener for map's location found
    map.on('locationfound', onLocationFound);

    // Event listener for map's location error
    map.on('locationerror', onLocationError);

    // Event listener for fetch button
    document.getElementById('fetchButton').addEventListener('click', fetchBusStops);

    // Event listener for the clear button
    document.getElementById('clearButton').addEventListener('click', clearLog);

    // Event listener for map move
    map.on('move', addOrUpdateCenterMarker);

    // Event listener for popup close
    map.on('popupclose', function(event) {
        var codeLieu = event.popup._source.options.codeLieu;
        if (codeLieu && waitingTimes.hasOwnProperty(codeLieu)) {
            // Update waiting time in the popup content when closing
            var popupContent = "<span>" + event.popup._source.options.libelle + "</span><br><span id='tempsSpan_" + codeLieu + "'>Temps d'attente : " + waitingTimes[codeLieu] + "</span>";
            event.popup.setContent(popupContent);
        }
    });
});