# Waiting time for a location or stop

## Description

``` { .get }
https://open.tan.fr/ewp/tempsattente.json/{codeArret}
```

| Path parameter  | Type   | Description |
| --------------- | ------ | ----------- |
| `codeArret`     | String |             |

## Response body

```json
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

| Element     | Type   |  Description     |
| ----------- | ------ | ---------------- |
| `sens`  | String |                  |
| `terminus`   | String |                  |
| `infotrafic`  | String |                  |
| `temps`     | Array  |                  |
| `dernierDepart`     | Array  |                  |
| `tempsReel`     | Array  |                  |
| `ligne`     | Array  |                  |
| ;nbsp;nbsp;nbsp;nbsp;`numLigne` | Array  |                  |
| ;nbsp;nbsp;nbsp;nbsp;`typeLigne` | Array  |                  |
| `arret` | Array  |                  |
| ;nbsp;nbsp;nbsp;nbsp;`codeArret` | Array  |                  |

## Return codes

| Return code   | Description     |
| ------------- | ---------------- |
| `latitude`    | String | 
| `longitude`   | String | 

## Try the call

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
