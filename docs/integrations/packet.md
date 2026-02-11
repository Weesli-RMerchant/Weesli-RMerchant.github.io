# Packet Integration

To ensure players never miss a visiting Merchant, RMerchant uses **Packet Integration** to render visual effects directly to the player client side.

## Glow Support

The primary feature powered by this integration is the **Glow Effect**. When a Merchant spawns on a player's island or nearby, it can be highlighted with a glowing outline. This makes the Merchant easily visible even from a distance or behind obstacles.

- **Visual Alert**: The glow acts as a visual notification that the Merchant has arrived.

## Supported Libraries

RMerchant achieves this high-performance visual effect using packet manipulation, ensuring it doesn't cause server lag. It supports:

- **PacketEvents** (Recommended)
- **ProtocolLib**

::: warning Dependency
You must have one of these libraries installed on your server for the Glow effect to work.
:::
