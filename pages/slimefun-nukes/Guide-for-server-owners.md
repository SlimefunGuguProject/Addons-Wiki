## Installing

1. Download the latest version of Slimefun 4 [here](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/), or [here](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/stable/) if you prefer a stable release.

2. Download SlimefunNukes from [SpigotMC](https://www.spigotmc.org/resources/slimefunnukes.42670/) or compile it yourself.

3. Put the JAR files you just downloaded into the **plugins** folder.

4. Start the server!

## Configuration

You can use the config.yml file to tweak some features or add new items to the addon.

```yaml
blocks-per-second: 10000 # Blocks removal rate when creating a crater. Setting this too high may cause lag depending on the hardware of your server.
nukes: # List of nukes. You can add new ones by just copying one of these and modifying it.
# First nuke
- fuse: 30 # Seconds between the bomb is ignited and the explosion
  incendiary: false # Whether it causes fire or not
  name: '&cNuclear warhead' # The name of the item
  recipe: # Recipe of the item. You can use Slimefun Items IDs or Minecraft IDs
  - COAL_BLOCK
  - IRON_BLOCK
  - COAL_BLOCK
  - IRON_BLOCK
  - URANIUM
  - IRON_BLOCK
  - COAL_BLOCK
  - IRON_BLOCK
  - COAL_BLOCK
  id: LITTLE_NUKE # Internal ID of the item. IMPORTANT: It has to be unique
  radius: 16 # Radius of the crater
# Second nuke
- fuse: 45
  incendiary: true
  name: '&cMedium nuclear warhead'
  recipe:
  - COAL_BLOCK
  - REINFORCED_PLATE
  - COAL_BLOCK
  - REINFORCED_PLATE
  - PLUTONIUM
  - REINFORCED_PLATE
  - COAL_BLOCK
  - REINFORCED_PLATE
  - COAL_BLOCK
  id: MEDIUM_NUKE
  radius: 32
research-cost: 50 # Cost of the research to unlock the items
```

## Commands and permissions

The plugin has just one command to check the version you're running.

- **/sfnukes** - sfnukes.cmd