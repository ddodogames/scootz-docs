---
title: $isBoostMessage
---
Checks if a message is a boost message from Discord.

# Usage
```js
$isBoostMessage[messageID;channelID]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| messageID | string | ID of the message to check | true 
| channelID | string | Channel id that has the message to check | true 

# Example
This will mostly return `false`.
```js
$isBoostMessage[$messageID;$channelID]
```
