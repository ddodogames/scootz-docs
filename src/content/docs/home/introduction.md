---
title: Introduction
---

`scootz.js` is a silly package for aoi.js that registers custom functions you can use.

In this documentation, you will mostly find functions available of the package you can use in your aoi.js bot. Nothing fancy about it i would say.

:::note
`scootz.js` is not made by official aoi.js developers and so therefore, do not request support for the package in their official support server. Instead, request support for it by going into [Github Issues](https://github.com/ddodogames/scootz.js/issues/new/choose).
:::

# Setup
* aoi.js 6.9.0 or later is required for a better experience.
* Node.js v20 or later is also required.

```js
// Stable version
npm i scootz.js@latest

// Canary version
npm i https://github.com/ddodogames/scootz.js

// or if you want to use completed pre-release builds
npm i scootz.js@canary
```

You then load the package with the following
```js
// Define clients
const { Plugins } = require("scootz.js")
const { AoiClient } = require("aoi.js");

// Setup aoi.js first
const client = new AoiClient({
    token: "Discord Bot Token", // Here goes the Token you copied earlier!
    prefix: "Discord Bot Prefix", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Load the package
const plugins = new Plugins({ client: client }); 
plugins.loadPlugins(); 
```
This will enable all custom functions that were created in the package.
