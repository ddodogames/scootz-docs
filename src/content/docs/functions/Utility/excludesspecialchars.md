---
title: $excludeSpecialChars
---
Removes any special characters included within specified text

# Usage
```js
$excludeSpecialChars[text]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| text | string | text to remove the special chars | true 

# Example
This will remove `#!` from the message.
```js
$excludeSpecialChars[hello#!]
```
