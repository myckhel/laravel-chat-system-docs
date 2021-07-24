---
id: guides.chatEvent
title: Using ChatEvent
sidebar_label: Using ChatEvent
slug: /guides/chatEvent
---

## Creating chatEvent
You may create chat events by a `ChatEventMaker` model for `Message` or `Conversation` models.
for example, creating a read event for a particular message.
```php
$user->chatEventMakers()
  ->create([
    'made_type' => $message::class,
    'made_id'   => $message->id,
    'type'      => "read"
  ]);
```
<details>
<summary>output</summary>

```json
{
    "made_type": "App\\Models\\Message",
    "made_id": 925,
    "type": "read",
    "maker_id": 13,
    "maker_type": "App\\Models\\User",
    "updated_at": "2021-07-23T23:00:06.000000Z",
    "created_at": "2021-07-23T23:00:06.000000Z",
    "id": 2042
}
```
</details>

## Broadcasting chatEvent
By default, everytime chat is event is created, a [Message\Events](../apis/events/message/events) is broadcasted if only you [registered ChatSystem Observers](providers#registering-observers).
You may manually broadcast chatEvent.
```php
use Myckhel\ChatSystem\Events\Message\Events;

broadcast(new Events($chatEvent));
```
<details>
<summary>output</summary>

```json
[2021-07-23 23:00:07] local.INFO: Broadcasting [message] on channels [private-message-event.user.13, private-message-event.user.10] with payload:
{
    "event": {
        "id": 2042,
        "maker_type": "App\\Models\\User",
        "maker_id": 13,
        "made_type": "App\\Models\\Message",
        "made_id": 925,
        "type": "read",
        "all": false,
        "created_at": "2021-07-23T23:00:06.000000Z",
        "updated_at": "2021-07-23T23:00:06.000000Z",
        "made": {
            "id": 925,
            "conversation_id": 305,
            "user_id": 13,
            "reply_type": null,
            "reply_id": null,
            "message": "i am good",
            "type": "user",
            "metas": {
                "token": "1627080883413"
            },
            "created_at": "2021-07-23T22:54:44.000000Z",
            "updated_at": "2021-07-23T22:54:44.000000Z",
            "isSender": true
        }
    },
    "conversation_id": null,
    "socket": null
}
```
</details>
