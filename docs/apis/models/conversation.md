---
id: conversation
title: Conversation APIs
sidebar_label: Conversation
slug: /apis/models/conversation
---

## **Namespace**

`Myckhel\ChatSystem\Models\Conversation`

## **Columns**
| name      | type                        | description              |
| --------- | --------------------------- | ------------------------ |
| `user_id` | int                         | user id                  |
| `name`    | string\|null                | conversation name        |
| `type`    | enum(private, group, issue) | type of the conversation |

## Query Builders

Methods that build queries.

### `whereHasLastMessage()`

> adds query where conversation has latest message where message is not a system message.

#### @Params

- **`?user`** | pass user arg for query to exclude messages deleted by the user. | `int|ChatEventMaker|null`

```php
Conversation::whereHasLastMessage($user)->get();
```

### `whereNotParticipant()`

> Adds query where conversation doesn't have the given user as a participant.

#### @Params

- **`?user`** | pass user arg to query conversation where doesn't have participant equals the user. | `int|ChatEventMaker`

```php
Conversation::whereNotParticipant($user)->first();
```

## Util Methods

### `createMessateWithToken()`

> Creates a message with token.

#### @Return
- type `Myckhel\ChatSystem\Models\Message`

#### @Params

- **`token`** | unique token | `string|int`
- **`message`** | message props | `array`

```php
$message = $conversation->createMessageWithToken(
  $token,
  ['message' => 'hello', 'user_id' => $user->id]
);
```

### `addParticipant()`

> Adds a user as participant of the conversaton.

#### @Return
- type `Myckhel\ChatSystem\Models\ConversationUser`

#### @Params

- **`user`** | participant to add | `Myckhel\ChatSystem\Contracts\ChatEventMaker`
- **`message`** | message text for the activity message that may be created | `string`

```php
$participant = $conversation->addParticipant($user, message: 'Someone joined the conversation');
```

### `removeParticipant()`

> Removes a user as participant of the conversaton.

#### @Return
- type `null|bool`

#### @Params

- **`user`** | participant to remove | `Myckhel\ChatSystem\Contracts\ChatEventMaker`
- **`message`** | message text for the activity message that may be created | `string`

```php
$participant = $conversation->addParticipant($user, message: 'Someone joined the conversation');
```

### `createMessageActivity()`

> Creates an activity message.

#### @Return
- type `Myckhel\ChatSystem\Models\Message`

#### @Params

- **`message`** | message props | `array`

```php
$message = $conversation->createMessageActivity(message: [
  'user_id' => $user->id,
  'message' => 'Hello'
]);
```

### `makeDelete()`

> create a chatEvent of type `delete` for the `conversation` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`
- **`?row`** | specify whether to always create a new chat_events db row ortherwise update or create chat_events db row. | `bool` default to `false`
- **`?all`** | specify whether to apply event for all. this should set the chat event column to `true|false` | `bool`

```php
$conversation->makeDelete(user: $user, row: false, all: false);
```

### `makeRead()`

> create a chatEvent of type `read` for the `conversation` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`
- **`?row`** | specify whether to always create a new chat_events db row ortherwise update or create chat_events db row. | `bool` default to `true`
- **`?all`** | specify whether to apply event for all. this should set the chat event column to `true|false` | `bool`

```php
$conversation->makeRead(user: $user, row: true, all: false);
```

### `makeDelivered()`

> create a chatEvent of type `deliver` for the `conversation` through the given `user`

#### @Return
- type [ChatEvent Model](chatEvent)

#### @Emits
- type [Message Events](../events/message/events)

#### @Params

- **`user`** | user to assign the event to | `user`
- **`?row`** | specify whether to always create a new chat_events db row ortherwise update or create chat_events db row. | `bool` default to `true`
- **`?all`** | specify whether to apply event for all. this should set the chat event column to `true|false` | `bool`

```php
$conversation->makeDelivered(user: $user, row: true, all: false);
```

### `makeChatEvent()`

> Method to make events for conversation.

- **`user`** | user to assign the event to | `user`
- **`?row`** | specify whether to always create a new chat_events db row ortherwise update or create chat_events db row. | `bool` default to `false`
- **`?all`** | specify whether to apply event for all. this should set the chat event column to `true|false` | `bool`

```php
$conversation->makeChatEvent(user: $user, type: 'delete', row: false, all: false);
```

## Relationships
These are methods that defines the relationship between models.

### `last_message()`

> Conversation has one latest message.

```php
$conversation->last_message()->first();
```

### `participants()`

> Conversation has many conversation user.

```php
$conversation->participants()->get();
```

### `participant()`

> Conversation has one latest conversation user.

#### @Params

- **`user`** | where participant = user | `User`

```php
$conversation->participant($user)->first();
```

### `otherParticipant()`

> Conversation has one other latest conversation user.

#### @Params

- **`user`** | where participant != user | `User`

```php
$conversation->otherParticipant($user)->first();
```

### `otherParticipants()`

> Conversation has many other latest conversation user.

#### @Params

- **`user`** | where participants doesn't include user | `User`

```php
$conversation->otherParticipants($user)->get();
```

### `messages()`

> Conversation has many messages.

```php
$conversation->messages()->get();
```

### `unread()`

> Conversation has many unread messages where given user is not the message sender.

#### @Params

- **`user`** | user to query unread messages for. | `int|ChatEventMaker`

```php
$conversation->unread($user)->get();
```

### `undelivered()`

> Conversation has many undelivered messages where given user is not the message sender.

#### @Params

- **`user`** | user to query unread messages for. | `int|ChatEventMaker`

```php
$conversation->undelivered($user)->get();
```

### `notMsgEvents()`

> Conversation has many messages where given user is not the message sender.

#### @Params

- **`user`** | user to query unread messages for. | `int|ChatEventMaker`
- **`type`** | message event type message should not have. | `enum(read|deliver|delete)`

```php
$conversation->notMsgEvents($user, 'read')->get();
```

### `author()`

> Conversation belongs to a user.

```php
$conversation->author;
```

## Collection methods
These are methods that could be called on collection of messages.

### `makeDelivered()`

> Method to mark conversations as delivered,

#### @Params

- **`user`** | user to assign chat events to. | `ChatEventMaker`

```php
$messages = $user->messages()->get();

$messages->makeDelivered(user: $user);
```
