---
id: message
title: Message APIs
sidebar_label: Message
slug: /apis/models/message
---

## **Namespace**

`Myckhel\ChatSystem\Models\Message`

## **Columns**
| name              | type                         | description                        |
| ----------------- | ---------------------------- | ---------------------------------- |
| `conversation_id` | int                          | conversation id message belongs to |
| `user_id`         | int                          | user id message belongs to         |
| `reply_id`        | int                          | reply id message belongs to        |
| `reply_type`      | string                       | reply class message belongs to     |
| `message`         | string                       | message text                       |
| `type`            | enum(user, system, activity) | message text                       |
| `metas`           | json                         | message key values                 |

## Query Builders

Message Model Query Builder APIs

### `whereNotSender()`

> adds query to to exclude the given user

#### @Params

- **`?user`** | message sender to exclude. | `int|ChatEventMaker|null`

```php
Message::whereNotSender($user)->get();
```

### `whereReply()`

> adds query condition on the given reply_id and or reply_type

#### @Params

- **`reply`** | message sender to exclude. | `array[reply_id => int, reply_type => string]`

```php
Message::whereReply([
  'reply_id' => 1,
  'reply_type' => Message::class
])->get();
```

### `notMsgEvents()`

> adds query where message doesn't have chatEvents

#### @Params

- **`?type`** | adds condition where = message chatEvents.type. | `string(read|delete|deliver)`
- **`?user`** | adds condition where user = message chatEvents maker | `int|ChatEventMaker|null`
- **`?conversationScope`** | callback to get the conversation query object. | `null|Closure`

```php
Message::notMsgEvents(
  'read',
  $user,
  fn ($query) => $query->where('created_at', '<', NOW())
)->get();
```

### `whereRelatedToUser()`

> adds query where message has participant = user

#### @Params

- **`user`** | adds condition where user = participant | `int|ChatEventMaker|null`

```php
Message::whereRelatedToUser(
  $user,
)->get();
```

### `hasEvent()`

> adds query where message has chatEvents

#### @Params

- **`eventScope?`** | callback to get the chatEvents query object. | `callable`

```php
Message::hasEvents(
  fn ($q) => $q->whereType('read'),
)->get();
```

### `HasNoEvent()`

> adds query where message has no chatEvents

#### @Params

- **`eventScope?`** | callback to get the chatEvents query object. | `callable`

```php
Message::HasNoEvent(
  fn ($q) => $q->whereType('deliver'),
)->get();
```

### `whereConversationWasntDeleted()`

> query where message's conversation has not been deleted

#### @Params

- **`by?`** | adds condition where conversation was not deleted by the given user. | `user`

```php
Message::whereConversationWasntDeleted(
  $user,
)->get();
```

### `whereConversationWasntDeleted()`

> query where message's conversation has not been deleted

#### @Params

- **`by?`** | adds condition where conversation was not deleted by the given user. | `user`

```php
Message::whereConversationWasntDeleted(
  $user,
)->get();
```

## Util Methods

### `participantsHasDeleted()`

> check if message has been deleted by all participants of the conversation message belongs to.

#### @Return
- type `bool`

#### @Params

- **`?maker_id`** | chatEvent maker_id to exclude | `int`

```php
$message = $user->messages()->first();
$message->participantsHasDeleted($user->id); // true|false
```

### `makeDelete()`

> create a chatEvent of type `delete` for the `message` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`
- **`?all`** | specify whether to apply event for all. this should set the chat event column to `true|false` | `bool`

```php
$message = $user->messages()->first();
$message->makeDelete($user);
```

### `makeRead()`

> create a chatEvent of type `read` for the `message` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`

```php
$message = $user->messages()->first();
$message->makeRead($user);
```

### `makeDelivered()`

> create a chatEvent of type `deliver` for the `message` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`

```php
$message = $user->messages()->first();
$message->makeDelivered($user);
```

### `participants()`

> Query participants of the conversation the message belongs to.

#### @Return
- type `ConversationUser Query Builder`

#### @Params

- **`?user`** | adds condition where participant = user | `int|user`

find user from the message's participants
```php
$message = $user->messages()->first();
$message->participants($otherUser)->find(); // ConversationUser|null
```

## Relationships
These are methods that defines the relationship between models.

### `conversation()`

> Conversation message belongs to.

```php
$message = $user->messages()->first();
$message->conversation->id;
```

### `chatEvents()`

> Message has many chat events

```php
$message = $user->messages()->first();
$message->chatEvents;
```

### `sender()`

> Message belongs to user

```php
$message = $user->messages()->first();
$message->user;
```

### `reply()`

> Message belongs to message as reply

```php
$message = $user->messages()->first();
$message->reply;
```

## Collection methods
These are methods that could be called on collection of messages.

### `prependSystemMessage()`

> Method to prepend messages to the collection,
> originally created to add system message,
> you may ignore the name as it can add any type of messages

```php
$messages = $user->messages()->get();

$messages->prependSystemMessage(
  $message1, $message2
);
```

### `appendSystemMessage()`

> Method to append messages to the collection

```php
$messages = $user->messages()->get();

$messages->appendSystemMessage(
  $message1, $message2
);
```

### `makeRead()`

> Method to mark messages as read,
> pass a user arg to specify the user reading the messages. 

```php
$messages = $user->messages()->get();

$messages->makeRead($user);
```

### `makeDelete()`

> Method to mark messages as deleted,
> pass a user arg to specify the user deleting the messages. 
> pass a all arg to delete the messages for a participants of the message conversation. 

```php
$messages = $user->messages()->get();

$messages->makeDelete(user: $user, all: false);
```

### `makeDelivered()`

> Method to mark messages as delivered,
> pass a user arg to specify the user which messages are being delivered to. 

```php
$messages = $user->messages()->get();

$messages->makeDelivered(user: $user, all: false);
```

### `makeChatEvent()`

> Method to make events for messages,
> pass a user arg to specify the user making the event. 
> pass a type arg to specify the type of the event. 
> pass a all arg to specify the event is for all participant of the conversation message belongs to. 

```php
$messages = $user->messages()->get();

$messages->makeChatEvent(user: $user, type: 'delete', all: false);
```
