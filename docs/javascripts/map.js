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

    // Declare circle variable globally
    var circle;

    // Define the polygon representing the boundaries of Nantes
    var polygonCoords = [ 
        { lat: 47.20273537601181, lng: -1.8257904052734375},
        { lat: 47.20745859230797, lng: -1.8130016326904295},
        { lat: 47.20640902503014, lng: -1.7909431457519531},
        { lat: 47.213813861618526, lng: -1.7817592620849607},
        { lat: 47.208566446348705, lng: -1.7580699920654297},
        { lat: 47.22997828481649, lng: -1.73858642578125},
        { lat: 47.227413728693236, lng: -1.7269134521484375},
        { lat: 47.21913636022709, lng: -1.7102622985839842},
        { lat: 47.22776344819857, lng: -1.6864013671875},
        { lat: 47.24594568294736, lng: -1.6738700866699219},
        { lat: 47.23802086049996, lng: -1.648120880126953},
        { lat: 47.246994467676, lng: -1.632843017578125},
        { lat: 47.266317704548285, lng: -1.6898345947265625},
        { lat: 47.270744062165726, lng: -1.6839122772216797},
        { lat: 47.26451211028417, lng: -1.6502666473388672},
        { lat: 47.271908831594416, lng: -1.6371345520019531},
        { lat: 47.28221592373454, lng: -1.6466617584228513},
        { lat: 47.28407913852176, lng: -1.6340446472167969},
        { lat: 47.271967069392936, lng: -1.607522964477539},
        { lat: 47.276509420228905, lng: -1.6001415252685545},
        { lat: 47.288620449645244, lng: -1.593017578125},
        { lat: 47.3031151031727, lng: -1.5882110595703125},
        { lat: 47.303947224527334, lng: -1.5689849853515625},
        { lat: 47.31463813646941, lng: -1.556711196899414},
        { lat: 47.32687406168649, lng: -1.5593719482421875},
        { lat: 47.32536461140568, lng: -1.548771858215332},
        { lat: 47.31797536404524, lng: -1.5434503555297852},
        { lat: 47.3117285166706, lng: -1.5371417999267578},
        { lat: 47.29632532199346, lng: -1.5242242813110352},
        { lat: 47.298071621860004, lng: -1.5122079849243164},
        { lat: 47.30759658130379, lng: -1.5105342864990234},
        { lat: 47.3123686467713, lng: -1.4904499053955078},
        { lat: 47.30486117879004, lng: -1.4771461486816406},
        { lat: 47.29659591129553, lng: -1.4786052703857422},
        { lat: 47.29341037346944, lng: -1.4818453788757322},
        { lat: 47.28145897398251, lng: -1.4777469635009766},
        { lat: 47.28075159828906, lng: -1.471738815307617},
        { lat: 47.287447405925384, lng: -1.4601516723632812},
        { lat: 47.29560632083442, lng: -1.4179229736328125},
        { lat: 47.30008843548231, lng: -1.4007568359375},
        { lat: 47.313183346594684, lng: -1.3843631744384766},
        { lat: 47.31650020906937, lng: -1.3568115234375},
        { lat: 47.32838665031475, lng: -1.3533782958984375},
        { lat: 47.325809587832865, lng: -1.3420486450195312},
        { lat: 47.315161851020285, lng: -1.341876983642578},
        { lat: 47.306956393403354, lng: -1.3537216186523438},
        { lat: 47.30544319117974, lng: -1.3734626770019531},
        { lat: 47.29327779963696, lng: -1.3855648040771484},
        { lat: 47.276975280320436, lng: -1.4212703704833984},
        { lat: 47.263580166567046, lng: -1.441526412963867},
        { lat: 47.252861634593735, lng: -1.4528560638427732},
        { lat: 47.23392414390718, lng: -1.4687347412109375},
        { lat: 47.22045984231342, lng: -1.4558601379394531},
        { lat: 47.194629123534064, lng: -1.4443588256835938},
        { lat: 47.18739660129236, lng: -1.4559459686279297},
        { lat: 47.166180470742326, lng: -1.4603662490844727},
        { lat: 47.14853409409528, lng: -1.4534568786621094},
        { lat: 47.139135136155204, lng: -1.4533710479736328},
        { lat: 47.13242057735797, lng: -1.4602375030517578},
        { lat: 47.136507801076995, lng: -1.47491455078125},
        { lat: 47.15228719264557, lng: -1.4814376831054688},
        { lat: 47.15882415643937, lng: -1.4857292175292969},
        { lat: 47.15438844727707, lng: -1.5102767944335938},
        { lat: 47.13991145233233, lng: -1.5205764770507812},
        { lat: 47.14719148755797, lng: -1.53533935546875},
        { lat: 47.155672506429546, lng: -1.55181884765625},
        { lat: 47.163758721326715, lng: -1.5464973449707031},
        { lat: 47.16661812452009, lng: -1.5604877471923828},
        { lat: 47.171353216644526, lng: -1.568470001220703},
        { lat: 47.150860316780125, lng: -1.5938758850097656},
        { lat: 47.124361987625164, lng: -1.6158485412597654},
        { lat: 47.11933935041418, lng: -1.6338729858398435},
        { lat: 47.12383638501558, lng: -1.6530132293701172},
        { lat: 47.131970781096726, lng: -1.6800498962402342},
        { lat: 47.140536328447716, lng: -1.6924095153808594},
        { lat: 47.13720843645818, lng: -1.7088031768798826},
        { lat: 47.13080293531507, lng: -1.7349815368652342},
        { lat: 47.14002821806221, lng: -1.7452812194824219},
        { lat: 47.14526507981218, lng: -1.7092323303222656},
        { lat: 47.153845813521954, lng: -1.71112060546875},
        { lat: 47.16779384530306, lng: -1.7257976531982422},
        { lat: 47.190196404240744, lng: -1.722879409790039},
        { lat: 47.19515402630053, lng: -1.756439208984375},
        { lat: 47.19527067065465, lng: -1.7848491668701172},
        { lat: 47.19704080838638, lng: -1.815018653869629},
        { lat: 47.20273537601181, lng: -1.8257904052734375}
    ];

    // Create a Leaflet polygon object from the coordinates
    var polygon = L.polygon(polygonCoords);
    
    // Show the polygon on the map
    // polygon.addTo(map);

    // Function to check if a point is inside the defined polygon
    function isPointInPolygon(lat, lng) {
        var point = L.latLng(lat, lng);
        return polygon.contains(point);
    }

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
        
        if (!isPointInPolygon(e.latlng.lat, e.latlng.lng)) {
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
        var center = map.getCenter();
        if (!isPointInPolygon(center.lat, center.lng)) {
            
            // User is outside of Nantes
            logMessage('You are trying to fetch bus stops outside of Nantes. Are you lost? If so, click Locate me.', 'warning');
            return;
        }

        var url = 'https://open.tan.fr/ewp/arrets.json/';
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

        // Clear previous circles
        if (circle) {
            map.removeLayer(circle);
        }

        // Draw circle around the center
        var center = L.latLng(latitude, longitude);
        var radius = 550; // Adjust as needed
        var circleOptions = {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2
        };

        circle = L.circle(center, {radius: radius, ...circleOptions}).addTo(map);
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