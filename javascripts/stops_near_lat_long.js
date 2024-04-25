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
            logMessage('Fetching bus stops...');
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    const prettyJson = JSON.stringify(json, null, 2); // Prettify JSON with 2 spaces indentation
                    const highlightedJson = hljs.highlight('json', prettyJson).value; // Highlight JSON using highlight.js
                    logMessage('JSON response for ' + latitude + ' / ' + longitude + ':<br>' + highlightedJson, 'info'); // Log prettified JSON result in the log
                })
                .catch(error => logMessage('Error fetching bus stops: ' + error, 'error'));
        } else {
            alert('Map center not available.');
        }
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

        // Update HTML content of .url element
        const urlElement = document.querySelector('.url');
        const { latitude, longitude } = getCurrentLatLng();
        const baseUrl = 'https://open.tan.fr/ewp/arrets.json/';
        const updatedUrl = baseUrl + latitude + '/' + longitude;
        urlElement.innerHTML = updatedUrl;
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

    // Function to handle click on the Jules Verne button
    function goToJulesVerne() {
        map.setView([47.201616, -1.577347], 15); // Set center to Jules Verne coordinates
        setTimeout(fetchBusStops, 500); // Fetch bus stops after a slight delay
    }

    // Function to handle click on the Elephant button
    function goToElephant() {
        map.setView([47.206472, -1.564297], 15); // Set center to Elephant coordinates
        setTimeout(fetchBusStops, 500); // Fetch bus stops after a slight delay
    }

    // Function to handle click on the Elephant button
    function goToTourLu() {
        map.setView([47.21569048858908, -1.5463312490789516], 15); // Set center to Elephant coordinates
        setTimeout(fetchBusStops, 500); // Fetch bus stops after a slight delay
    }

    // Event listener for Jules Verne button
    document.getElementById('julesVerne').addEventListener('click', goToJulesVerne);

    // Event listener for Elephant button
    document.getElementById('elephant').addEventListener('click', goToElephant);

    // Event listener for Elephant button
    document.getElementById('tourLu').addEventListener('click', goToTourLu);
});