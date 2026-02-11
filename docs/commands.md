# Commands

Here are the commands available in **RMerchant**. All admin commands require the `rmerchant.admin` permission.

## Command List

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/merchant` | Shows the plugin version and author information. | None |
| `/merchant reload` | Reloads the plugin configuration and restarts the merchant engine. | `rmerchant.admin` |
| `/merchant start` | Spawns the merchant NPC if it is not already started. | `rmerchant.admin` |
| `/merchant stop` | Despawns the merchant NPC. | `rmerchant.admin` |
| `/merchant addrecipe <name>` | Starts a new recipe creation session with the given name. | `rmerchant.admin` |
| `/merchant ok` | Confirms the current step in the recipe creation process. | `rmerchant.admin` |
| `/merchant editrecipe <recipe> <type>` | Edits an existing recipe. `<type>` can be `first`, `second`, or `result`. | `rmerchant.admin` |
| `/merchant cancelrecipe` | Cancels an active recipe creation session. | `rmerchant.admin` |

::: tip Alias
The main command `/merchant` can also be used as `/rmerchant`.
:::

## How to Add a Recipe

Creating a custom trade recipe is done entirely in-game using an interactive chat-based system. Follow these steps to add a new trade.

### Step 1: Start Creation
Run the following command to begin creating a recipe. Replace `<name>` with a unique identifier for your recipe (e.g., `diamond_sword_trade`).

```
/merchant addrecipe <name>
```

### Step 2: Set the First Input Item
1. Hold the item you want the player to pay (First Input) in your main hand.
2. Run the confirmation command:
   ```
   /merchant ok
   ```

### Step 3: Set the Second Input Item (Optional)
1. Hold the second item required for the trade in your main hand.
   * *If you only want a single-item cost, empty your hand (hold nothing).*
2. Run the confirmation command:
   ```
   /merchant ok
   ```

### Step 4: Set the Result Item
1. Hold the item the player will receive (Result) in your main hand.
2. Run the confirmation command:
   ```
   /merchant ok
   ```

**Success!** The recipe is now saved and the Merchant will update automatically.

---

## Editing Recipes

You can modify existing recipes without recreating them from scratch using the `/merchant editrecipe` command.

**Usage:**
```
/merchant editrecipe <recipe_name> <type>
```

- `<recipe_name>`: The name of the recipe you want to edit.
- `<type>`: The part of the recipe to change. Options:
  - `first`: Change the first input item.
  - `second`: Change the second input item.
  - `result`: Change the output item.

**Example:**
To change the result item of the `diamond_sword_trade` recipe:
1. Hold the new result item in your hand.
2. Run: `/merchant editrecipe diamond_sword_trade result`
