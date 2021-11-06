---
id: chatEvent
title: ChatEvent APIs
sidebar_label: ChatEvent
slug: /apis/models/chatEvent
---

## **Namespace**

`Myckhel\ChatSystem\Models\ChatEvent`

## **Columns**
| name         | type                        | description                                |
| ------------ | --------------------------- | ------------------------------------------ |
| `maker_id`   | int                         | id of the model making event               |
| `maker_type` | string                      | class of the model making event            |
| `made_id`    | int                         | id of the model making event from          |
| `made_type`  | string                      | class of the model making event from       |
| `type`       | enum(read, delete, deliver) | the type of the event                      |
| `all`        | bool                        | whether event was made for all participant |

## Query Builders

Methods that build queries.

### `withAll()`

> adds query where maker is the given user or chat event is for all participants.

#### @Params

- **`user`** | user to retrive chat events for. | `ChatEventMaker`

```php
ChatEvent::withAll($user)->get();
```

### `notMessenger()`

> adds query where the chat event message sender is not the given user.

#### @Params

- **`user`** | user that should not be the chat event message sender. | `ChatEventMaker|int`

```php
ChatEvent::notMessenger($user)->first();
```

## Relationships
These are methods that defines the relationship between models.

### `message()`

> ChatEvent belongs to a message.

```php
$chatEvent->message;
```

### `conversation()`

> ChatEvent belongs to a conversation.

```php
$chatEvent->conversation;
```

### `maker()`

> ChatEvent morph to maker models.

```php
$chatEvent->maker;
```

### `made()`

> ChatEvent morph to made models.

```php
$chatEvent->made;
```
