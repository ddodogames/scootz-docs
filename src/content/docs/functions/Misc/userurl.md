---
title: $userURL
---
Returns a direct link of your Discord.

# Usage
```js
$userURL[userID]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| userID | string | id of the user to return their link | true 

# Example
Returns `true` if the command `help` exists otherwise `false` if it does not.
```js
$userURL[$authorID]
```
