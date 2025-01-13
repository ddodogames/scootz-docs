---
title: $log
---
Normal `$log` from aoi.js but with support for custom colors.

# Usage
```js
$log[text;color?]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| text | string | Text to log | true 
| color | string | Color to use for the text | false 

# Example
This will log "Hello world!" in red color.
```js
$log[Hello world!;#57F287]
```
