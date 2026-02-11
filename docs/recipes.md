# Recipe Configuration

The `recipes.yml` file allows you to configure advanced trade settings, but there are strict rules for editing this file.

::: danger CRITICAL WARNING
**Do NOT manually edit the item strings in `capabilities`.**

The `input` and `output` fields contain Base64 serialized item data. Editing these strings directly will corrupt the item data and break the recipe.
:::

## How to Edit Recipes

### 1. Items (Input & Output)
Always use the **in-game commands** to change the input or output items of a recipe. The plugin handles the serialization automatically.

- **To Change Items:** Use `/merchant editrecipe` (see [Commands](/commands) for details).

### 2. Configuration (Max Uses & Commands)
You **CAN** manually edit the following fields in `recipes.yml`:
- `max-uses`: The maximum number of times a player can trade this recipe before it locks.
- `command`: A list of commands to execute when the trade is completed.

## Command Rewards

If you want the trade to execute a command instead of giving a physical item, you must still provide an `output` item to serve as the **display icon** in the merchant GUI.

### Example Configuration

```yaml
recipes:
  recipe-1:
    # SERIALIZED DATA - DO NOT TOUCH
    input:
      - H4sIAAAAAAAA/+NiYGBm4HZJLEkMSy0qzszPY2AQiOVgYMpMYRDMzcxLTS5KTCuxSslMzM3PS2FmYE3OL80rYWBgYGIAAB2U1mg6AAAA
    # SERIALIZED DATA - DO NOT TOUCH (This item acts as the ICON)
    output: H4sIAAAAAAAA/wXBwQmAMAwF0K9FEL04gnN4dgZvUkIatVDTUuP+fW8CHOadjA6pX8wKLOeIPgasb1ThSpdtovyQmgR/5xREPZWSxGHg/KsB6NAAzSum7UkAAAA=
    
    # EDITABLE SETTINGS
    max-uses: 3
    command:
      - give %player% diamond 2
```

In this example:
1. The player pays the `input` item.
2. The `max-uses` limit is checked.
3. The server executes `give %player% diamond 2`.
4. The `output` item is **NOT** given to the player; it is only shown in the menu to represent the trade.

::: tip
If you want to change the visual icon (Output), simply hold the new item in-game and run the edit command. The plugin will update the serialized string for you.
:::
