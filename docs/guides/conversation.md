---
id: guides.conversation
title: Using Conversation
sidebar_label: Using Conversation
slug: /guides/conversation
---

## Creating conversation
When conversation is created, the system will automatically add the creator as a participant of the conversation using the `conversation.user_id` if only the chatSystem Observer have been registered. see [registering-observers](providers#registering-observers) 
```php
$conversation = $user->conversations()->create([
  'user_id' => $user->id,
]);
```
<details>
<summary>output</summary>

```json
// conversation
{
  "id": 297,
  "user_id": 13,
  "type": "private",
  "updated_at": "2021-07-14T18:59:44.000000Z",
  "created_at": "2021-07-14T18:59:44.000000Z"
}
```
</details>

## Creating conversation type
You may create a conversation of another type such as `group` and should have a name.
```php
$conversation = $user->conversations()->create([
  'user_id' => $user->id,
  'type'    => 'group',
  'name'    => 'Laravel Developer\'s Group',
]);
```
<details>
<summary>output</summary>

```json
// conversation
{
  "id": 297,
  "user_id": 13,
  "type": "group",
  "name": "Laravel Developer\'s Group",
  "updated_at": "2021-07-14T18:59:44.000000Z",
  "created_at": "2021-07-14T18:59:44.000000Z"
}
```
</details>

## Adding/removing user/participant to conversation
You may add as many participants to a conversation but its not a good idea for a conversation of type `private` to have more than 2 participants.
The function will also create a message of type = activity. pass a message argument to customise the activity message.
```php
$conversation->addParticipant($user, message: 'Someone joined the conversation');
$conversation->removeParticipant($user, message: 'Someone left the conversation');
```
## Deleting conversation
You may delete conversation with [makeDelete](../apis/models/conversation#makedelete) method which requires 1 argument = user deleting the conversation.
You can specify delete for all option by passing named argument `all` which will specify that the conversation has been deleted for all participants.
The method will also try to emit [Message Events](../apis/events/message/events)
```php
$conversation->makeDelete($user, all: true);
```

