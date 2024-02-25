# List all stops

## Description

This web services allows you to list all stops in the Naolib network.

## URL

``` { .get }
https://open.tan.fr/ewp/arrets.json
```

## Response body

```json title="JSON"
[
  {
    "codeLieu": "ABCH",
    "libelle": "Abbé Chérel",
    "distance": null,
    "ligne": [
      {
        "numLigne": "50"
      },
      {
        "numLigne": "81"
      },
      {
        "numLigne": "91"
      },
      {
        "numLigne": "NBI"
      }
    ]
  },
  {
    "codeLieu": "ABDU",
    "libelle": "Abel Durand",
    "distance": null,
    "ligne": [
      {
        "numLigne": "C20"
      },
      {
        "numLigne": "LO"
      }
    ]
  },
  {
    "codeLieu": "ABLA",
    "libelle": "Avenue Blanche",
    "distance": null,
    "ligne": []
  },
```

!!! info
    This response example is shortened for clarity.

| Element    | Type   | Description |
|------------|--------|-------------|
| `codeLieu` | String | The identifier of a stop. |
| `libelle`  | String | The full name of a stop. |
| `distance` | String | The distance in meters from the latitude and longitude set in the request when [searching for stops near a latitude/longitude](stops_near_lat_long.md). When listing all stops, its value is `null`. |
| `ligne`    | Array  | Transport lines to which the stop belongs. |
| `numLigne` | String  | The number of a transport line to which the stop belongs. |

## Return codes

| Return code | Description |
|-------------|-------------|
| `200 OK`    | The request was successful. | 

## Try the call

<div class="spacing1">
    <button id="clearButton" class="md-button">🧹 Clear log</button>
    <button id="fetchButton" class="md-button">🚀 Run</button>
</div>

<pre><code class="message"></code></pre>

<!-- Script section -->
<script src="../javascripts/much_simpler.js"></script>
