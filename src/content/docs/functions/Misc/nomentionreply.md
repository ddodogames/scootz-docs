---
title: $noMentionReply
---
Basically `$reply` but without mentions enabled by default.

# Usage
```js
$noMentionReply[messageID]
```

# Parameters
| Field | Type | Description | Required? |
|--------|--------|--------|--------|
| messageID | string | ID of the message to reply to | true 

# Example
This will reply to your message without mentioning you.
```js
$noMentionReply[$messageID]
Hello, $username!
```
