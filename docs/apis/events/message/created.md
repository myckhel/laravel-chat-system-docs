---
id: messageCreated
title: Message Created Event
sidebar_label: Message Created Event
slug: /apis/events/message/created
---

## **Namespace**

`Myckhel\ChatSystem\Events\Message\Created`

## **Broadcasts as**
- `Myckhel\\ChatSystem\\Events\\Message`

## **Broadcasts with**
- `message`  type `Myckhel\ChatSystem\Contracts\IMessage`

## **Broadcasts on channels**
- `private-message-created.{$conversation_id}`
- `message-new.user.{$participant_id}`
