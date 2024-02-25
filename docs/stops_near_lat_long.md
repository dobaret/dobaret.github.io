# Search for stops near a latitude and longitude

## Description

This web services allows you to search for all stops in the Naolib network within a 500-meter radius of a given latitude and longitude.

## URL

``` { .get }
https://open.tan.fr/ewp/arrets.json/{latitude}/{longitude}
```

| Path parameter | Type   |
|----------------|--------|
| `latitude`     | Number |
| `longitude`    | Number |

!!! info
    Use latitude and longitude values with at least five decimals. Five decimals correspond to an accuracy of 1.11m.

## Response body

```json title="JSON"
[
  {
    "codeLieu": "MVSI",
    "libelle": "Mauvoisins",
    "distance": "78 m",
    "ligne": [
      {
        "numLigne": "4"
      }
    ]
  },
  {
    "codeLieu": "JLVE",
    "libelle": "Joliverie",
    "distance": "471 m",
    "ligne": [
      {
        "numLigne": "172"
      },
      {
        "numLigne": "30"
      },
      {
        "numLigne": "4"
      },
      {
        "numLigne": "42"
      },
      {
        "numLigne": "LS"
      }
    ]
  },
  {
    "codeLieu": "RPSI",
    "libelle": "Ripossière",
    "distance": "491 m",
    "ligne": [
      {
        "numLigne": "172"
      },
      {
        "numLigne": "42"
      }
    ]
  }
]
```

| Element    | Type   | Description                                                                |
|------------|--------|----------------------------------------------------------------------------|
| `codeLieu` | String | The identifier of a stop.                                                  |
| `libelle`  | String | The full name of a stop.                                                   |
| `distance` | String | The distance in meters from the latitude and longitude set in the request. |
| `ligne`    | Array  | Transport lines to which the stop belongs.                                 |
| `numLigne` | String | The number of a transport line to which the stop belongs. |

## Return codes

| Return code | Description |
|-------------|-------------|
| `200 OK`    | The request was successful. | 

## Try the call

/// details | Demonstration methodology
This demonstration gets the current longitude and latitude of the marker at the center of the map.

Using the longitude and latitude, it calls the Search for stops near a latitude and longitude web service.

It then prints the response it gets in the `.message` element.

Enough said: try it out!
///

<pre><code class="url"></code></pre>

<div id="map"></div>

<div class="spacing1">
    <button id="clearButton" class="md-button">🧹 Clear log</button>
    <button id="fetchButton" class="md-button">🚏 Get stops near me</button>
    <button id="locateButton" class="md-button">📍Locate me</button>
</div>

<div class="spacing2">
    <button id="tourLu" class="md-button">🍪 Tour LU</button>
    <button id="elephant" class="md-button">🐘 Elephant</button>
</div>

<div class="spacing3">
    <button id="julesVerne" class="md-button">🐚 Jules Verne museum</button>
</div>

<pre><code class="message"></code></pre>

<!-- Script section -->
<script src="../javascripts/simpler.js"></script>
