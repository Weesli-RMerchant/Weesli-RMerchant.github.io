# Configuration

This page explains how to configure the plugin's main settings and messages.

## Main Configuration (`config.yml`)

The `config.yml` file controls the core behavior of the merchant.

### General Settings

| Setting | Description | Default |
| :--- | :--- | :--- |
| `offer-count` | The number of different trades the merchant offers at once. | `3` |
| `time` | How long the merchant stays active before despawning or moving. Supports identifiers like `1m`, `30s`. | `1m` |
| `merchant-inventory-title` | The title of the merchant's GUI menu. | `&7Rozs Merchant` |

### Engine Type

Controls how the Merchant spawns and interacts with the world.

`engine-type: location` (or `player`, `region`)

- **location**: Spawns at a fixed coordinate defined in `static-location`.
- **player**: Visits the locations of random players.
- **region**: Visits player islands (requires Skyblock plugin).

### Location Settings

| Setting | Description | Example |
| :--- | :--- | :--- |
| `static-location` | The fixed spawn point when using `engine-type: location`. Format: `world:x:y:z`. | `world:0:0:0` |
| `region-type` | The Skyblock plugin to hook into when using `engine-type: region`. Supported: `superiorskyblock2`, `iridiumskyblock`. | `superiorskyblock2` |
| `banned-worlds` | A list of worlds where the merchant cannot spawn. | `- spawn`<br>`- example` |

### Notifications

| Setting | Description | Default |
| :--- | :--- | :--- |
| `static-location-message` | Whether to broadcast a message when the merchant spawns at a fixed location. | `true` |
| `player-location-message` | Whether to message the specific player being visited. | `true` |

---

## Localization (`messages.yml`)

You can translate or customize all player-facing messages in this file.

### Available Keys

| Key | Description | Default |
| :--- | :--- | :--- |
| `merchant-arrived-player` | Message sent to a player when the merchant visits them. | `&eThe merchant has come to see you!` |
| `merchant-arrived-location` | Broadcast message when the merchant spawns at a static location. | `&eThe merchant has arrived at the location!` |
| `special-offer-lore` | Lore added to items to indicate a special trade. | `&cThis is a special offer for you only!` |

::: tip Color Codes
You can use standard Minecraft color codes (e.g., `&a`, `&l`) in all messages and titles.
:::
