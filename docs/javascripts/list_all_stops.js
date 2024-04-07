// https://github.com/squidfunk/mkdocs-material/discussions/2498
document.addEventListener('DOMContentLoaded', function() {
    
    // Log the welcome message with a line break before it
    logMessage('Welcome!', 'info');

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

    // Function to fetch bus stops
    function fetchBusStops() {
        var url = 'https://open.tan.fr/ewp/arrets.json';
        logMessage('Fetching all bus stops...');
        fetch(url)
            .then(response => response.json())
            .then(json => {
                const prettyJson = JSON.stringify(json, null, 2); // Prettify JSON with 2 spaces indentation
                const highlightedJson = hljs.highlight('json', prettyJson).value; // Highlight JSON using highlight.js
                logMessage('JSON response:' + '<br>' + highlightedJson, 'info'); // Log prettified JSON result in the log
            })
            .catch(error => logMessage('Error fetching bus stops: ' + error, 'error'));
    }

    // Function to clear the log
    function clearLog() {
        const messageElement = document.querySelector('.message');
        messageElement.innerHTML = '';
    }

    // Event listener for the clear button
    document.getElementById('clearButton').addEventListener('click', clearLog);

    // Event listener for fetch button
    document.getElementById('fetchButton').addEventListener('click', fetchBusStops);
});