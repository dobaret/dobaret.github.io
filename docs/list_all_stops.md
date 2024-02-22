# List all stops

## Description

``` { .get }
https://open.tan.fr/ewp/arrets.json
```

## Response body

```json
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
<!--TODO: AJOUTER ANNOTATION QUI DIT C PAS VRAIMENT FINI-->

| Element   | Type   |  Description     |
| --------- | ------ | ---------------- |
| `codeLieu`  | String |                  |
| `libelle`   | String |                  |
| `distance`  | String |                  |
| `ligne`     | Array  |                  |

## Try the call

<div class="spacing1">
    <button id="clearButton" class="md-button">🧹 Clear log</button>
    <button id="fetchButton" class="md-button">🚀 Run</button>
</div>

<pre><code class="message"></code></pre>

<!-- Script section -->
<script src="../javascripts/much_simpler.js"></script>
