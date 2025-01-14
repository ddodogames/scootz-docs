---
title: $welcomeMessage
---
Let's you setup a text for greeting. Intended for `onJoin` event from aoi.js but can be used without the event for testing purposes.

# Usage
```js
$welcomeMessage[text]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| text | string | Text to use for greeting | true 

# Placeholders
| Name | Description | 
|--------|--------|
| `<username>` | Returns the member's username |
| `<Displayname>` | Returns the member's display name |
| `<mention>` | Mentions the member |
| `<id>` | Returns the member's id |
| `<owner.username>` | Returns the server owner's username |
| `<owner.id>` | Returns the server owner's id |
| `<server.name>` | Returns the server name |
| `<server.id>` | Returns the server id |
| `<creationdate>` | Returns the date the member joined Discord |
| `<position>` | Returns the member's position number |

# Example
This will return your username upon running it
```js
$welcomeMessage[Hello, <username>!]
```
