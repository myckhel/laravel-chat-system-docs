---
id: models
title: ChatSystem Models
sidebar_label: Using Models
slug: /guides/models
---

## Using ChatSystem Models
```php
use Myckhel\ChatSystem\Models\Conversation;
use Myckhel\ChatSystem\Models\Message;
use Myckhel\ChatSystem\Models\ConversationUser;
use Myckhel\ChatSystem\Models\ChatEvent;

Conversation::get();
Message::get();
ConversationUser::get();
ChatEvent::get();
```
## Controlling `ChatSystem` Models
### Extending `ChatSystem` Models
You may want to take control of some models, for example, caching model queries.
You may take control by extending the models and registering the model through the `chatsystem` config.

```php

namespace App\Models;

use Myckhel\ChatSystem\Models\Message as BaseMessage;
use QueryCache;

class Message extends BaseMessage
{
  use QueryCache;
}

```
### Registering ChatSystem Models
make sure you have published the chatsystem config file. see [publishing-the-config-file](../install#publishing-the-config-file)

```php
...
return [
...
  /*
  * Models
  */
  "models" => [
    ...
    // register Message model
    "message"       => "App\\Models\\Message",
  ],
...
```
### Using registered `ChatSystem` models
```php
use App\Models\Message;

Message::get();
```
