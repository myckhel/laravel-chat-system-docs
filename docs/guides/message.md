---
id: guides.message
title: Using Message
sidebar_label: Using Message
slug: /guides/message
---

## Creating message
You may create a message within a conversation using its `messages` relationship method.
```php
$conversation = $user->conversations($conversation_id)->first();

$conversation->messages()->create([
  'reply_id'        => $reply_id, // eg. message_id
  'reply_type'      => $reply_type, // eg. message::class
  'user_id'         => $user->id,
  'message'         => 'hello laravel',
  'type'            => 'user', // default user
]);
```
## Broadcasting Message Created
You may broadcast a [message created event](../apis/events/message/created) after creating a message for websocket clients to receive.
```php
use Myckhel\ChatSystem\Events\Message\Created;

broadcast(new Created($message));
```
<details>
<summary>output</summary>

```json
[2021-07-23 22:36:25] local.INFO: Broadcasting [message] on channels [private-message-created.304, private-message-new.user.13] with payload:
{
    "message": {
        "id": 922,
        "conversation_id": 304,
        "user_id": 13,
        "reply_type": null,
        "reply_id": null,
        "message": "i am good",
        "type": "activity",
        "metas": null,
        "created_at": "2021-07-23T22:36:20.000000Z",
        "updated_at": "2021-07-23T22:36:20.000000Z",
        "isSender": true,
        "reply": null
    },
    "socket": null
}  
```
</details>

## Creating an activity message type
A message type is default to `user` which means its a user message.
You may want to create another type of messages, for example, a `system` or an `activity` message.
An activity message can be used to hold a single event of a conversation. A user leaving a conversation is an event that occurs in a conversation which the event can be remembered by creating an activity message with the event.
```php
$conversation = $user->conversations($conversation_id)->first();

$conversation->createActivityMessage([
  'user_id'         => $user->id,
  'message'         => 'Someone left the conversation',
]);
```
<details>
<summary>output</summary>

```json
{
    "user_id": 13,
    "message": "Someone left the conversation",
    "type": "activity",
    "conversation_id": 304,
    "updated_at": "2021-07-23T22:36:20.000000Z",
    "created_at": "2021-07-23T22:36:20.000000Z",
    "id": 922,
}
```
</details>

## Creating a message with token
You may use message unique token feature to prevent creating duplicate messages.
For example, In your frontend app, you might be using job queue to create messages. let assume job queue sent request to the backend to create a message, after the message was created, client network lost and client couldn't know if the message was created but the message was surely created, now exception has occured and job queue has tried to send the same message later after network was regained, now the same message has been created twice.
If you had provided a unique token, the backend would have check and responded with an existing message having the token otherwise creates a new message. 
```php
$conversation = $user->conversations($conversation_id)->first();

$conversation->createMessageWithToken($token, [
  'user_id'         => $user->id,
  'message'         => 'hello laravel',
]);
```
<details>
<summary>output</summary>

```json
{
    "user_id": 13,
    "message": "i am good",
    "type": "user",
    "metas": {
        "token": "1627076937515"
    },
    "conversation_id": 300,
    "updated_at": "2021-07-23T21:48:58.000000Z",
    "created_at": "2021-07-23T21:48:58.000000Z",
    "id": 907,
    "isSender": true,
}
```
</details>

## Deleting message
You may delete message(s) with [makeDelete](../apis/models/message#makedelete) method which requires 1 argument = user deleting the conversation.
You can specify delete for all option by passing named argument `all` which will specify that the message has been deleted for all participants.
The method will also try to emit [Message Events](../apis/events/message/events)
```php
$message->makeDelete($user, $everyone);
```
<details>
<summary>output</summary>

```json
[2021-07-23 22:54:58] local.INFO: Broadcasting [message] on channels [private-message-event.user.13, private-message-event.user.10] with payload:
{
    "event": {
        "id": 2041,
        "maker_type": "App\\Models\\User",
        "maker_id": 13,
        "made_type": "App\\Models\\Message",
        "made_id": 925,
        "type": "delete",
        "all": true,
        "created_at": "2021-07-23T22:54:57.000000Z",
        "updated_at": "2021-07-23T22:54:57.000000Z",
        "made": {
            "id": 925,
            "conversation_id": 305,
            "user_id": 13,
            "message": "i am good",
            "type": "user",
            "metas": {
                "token": "1627080883413"
            },
            "created_at": "2021-07-23T22:54:44.000000Z",
            "updated_at": "2021-07-23T22:54:44.000000Z",
        }
    },
    "conversation_id": 305,
    "socket": null
}
```
</details>
