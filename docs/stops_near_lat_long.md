# Search for stops near a latitude/longitude

## Description

``` { .get }
https://open.tan.fr/ewp/arrets.json/{latitude}/{longitude}
```

| Path parameter | Type   | Description |
| -------------- | ------ | ----------- |
| `latitude`     | String |             |
| `longitude`    | String |             |

## Response body

```json
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

| Element     | Type   |  Description     |
| ----------- | ------ | ---------------- |
| `codeLieu`  | String |                  |
| `libelle`   | String |                  |
| `distance`  | String |                  |
| `ligne`     | Array  |                  |

## Return codes

| Return code   | Description     |
| ------------- | ---------------- |
| `latitude`    | String | 
| `longitude`   | String | 

## Try the call

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
