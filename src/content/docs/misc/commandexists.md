---
title: $commandExists
---
Checks if a command exists within your bot.

# Usage
```js
$commandExists[name]
```

# Parameters
| Field | Type | Description | Required? |
| name | string | Name of the command to check | true |

# Example
Returns `true` if the command `help` exists otherwise `false` if it does not.
```js
$commandExists[help]
```
