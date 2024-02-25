# Get the waiting time for a stop

## Description

This web services allows you to get waiting times for the various lines served by a stop.

## URL

``` { .get }
https://open.tan.fr/ewp/tempsattente.json/{codeLieu}
```

| Path parameter | Type   | Description                                                                                                                                                                  |
|----------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `codeLieu`     | String | The identifier of a stop. You can get a `codeLieu` by [listing all stops](list_all_stops.md), or by [searching for stops near a latitude/longitude](stops_near_lat_long.md). |

## Response body

```json title="JSON"
[
    {
        "sens": 1,
        "terminus": "Hangar à Bananes",
        "infotrafic": false,
        "temps": "5mn",
        "dernierDepart": "false",
        "tempsReel": "true",
        "ligne": {
            "numLigne": "5",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT1"
        }
    },
    {
        "sens": 2,
        "terminus": "Gare Sud",
        "infotrafic": false,
        "temps": "14mn",
        "dernierDepart": "false",
        "tempsReel": "true",
        "ligne": {
            "numLigne": "5",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT2"
        }
    },
    {
        "sens": 1,
        "terminus": "Hangar à Bananes",
        "infotrafic": false,
        "temps": "36mn",
        "dernierDepart": "false",
        "tempsReel": "true",
        "ligne": {
            "numLigne": "5",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT1"
        }
    },
    {
        "sens": 2,
        "terminus": "Gare Sud",
        "infotrafic": false,
        "temps": "44mn",
        "dernierDepart": "false",
        "tempsReel": "true",
        "ligne": {
            "numLigne": "5",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT2"
        }
    },
    {
        "sens": 1,
        "terminus": "St-Clément",
        "infotrafic": false,
        "temps": "",
        "dernierDepart": "false",
        "tempsReel": "false",
        "ligne": {
            "numLigne": "LN",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT2"
        }
    },
    {
        "sens": 1,
        "terminus": "Commerce",
        "infotrafic": false,
        "temps": "",
        "dernierDepart": "false",
        "tempsReel": "false",
        "ligne": {
            "numLigne": "LO",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT2"
        }
    },
    {
        "sens": 1,
        "terminus": "Hangar à Bananes",
        "infotrafic": false,
        "temps": "",
        "dernierDepart": "false",
        "tempsReel": "false",
        "ligne": {
            "numLigne": "LS",
            "typeLigne": 3
        },
        "arret": {
            "codeArret": "QANT2"
        }
    }
]
```

| Element         | Type   | Description |
|-----------------|--------|-------------|
| `sens`          | Number | The direction of the tram or bus. Can be `1` or `2`. |
| `terminus`      | String | The last stop on the line of the current direction.|
| `infotrafic`    | Boolean | Indicates whether a change in the normal operation of the line is ongoing, or coming.<br><br>Naolib publishes those changes on [L'info trafic de vos mobilités](https://naolib.fr/fr/info-trafic-1) (page in French). |
| `temps`         | String  | The time in minutes to the next tram or bus.<br>Other values are possible:<ul><li>`proche` indicates the next tram or bus is less than a minute away.</li><li>An empty value indicates no tram or bus in the next hour.</li></ul>|
| `dernierDepart` | String  | Indicates whether the next bus or tram for this direction is the last one before interruption. |
| `tempsReel`     | String  |             |
| `ligne`         | Object  | Transport lines to which the stop belongs. |
| `numLigne`      | String  | The number of a transport line to which the stop belongs. |
| `typeLigne`     | Number  | The line type. Can be `1`, `2`, or `3`:<ul><li>`1` corresponds to a tram line;</li><li>`2` corresponds to a [busway](https://en.wikipedia.org/wiki/Nantes_Busway) line (to the exception of line 5);</li><li>`3` corresponds to a bus line (including [navibus](https://en.wikipedia.org/wiki/Navibus)).</li></ul>|
| `arret`         | Object  | An object describing the stop. |
| `codeArret`     | String  | The `codeLieu` value followed by the `sens` value. |

## Return codes

| Return code | Description |
|-------------|-------------|
| `200 OK`    | The request was successful. | 

## Try the call

/// details | Demonstration methodology
This demonstration gets the current longitude and latitude of the marker at the center of the map.

Using the longitude and latitude, it calls the [Search for stops near a latitude and longitude](stops_near_lat_long.md) web service. This web services returns the nearest stops in a 500-meter radius of the given latitude and longitude, including their distance in meters.

However, it does not return their exact latitude and longitude.

To get the exact latitude and longitude of stops, it is possible to use the [Arrêts des transports en commun Naolib de Nantes Métropole](https://data.nantesmetropole.fr/explore/dataset/244400404_tan-arrets/table/) database as an API (page in French).

With the location of the nearest stops, it is possible to display markers on the map for each stop.

Next, the demonstration gets the waiting times for each stop, and displays them in a table.

Enough said: try it out!
///

<div id="map"></div>

<p class="current"></p>

<div class="spacing1">
    <button id="clearButton" class="md-button">🧹 Clear log</button>
    <button id="fetchButton" class="md-button">🚏 Get stops near me</button>
    <button id="locateButton" class="md-button">📍Locate me</button>
</div>

<pre><code class="message"></code></pre>

<!-- Script section -->
<script src="../javascripts/map.js"></script>
