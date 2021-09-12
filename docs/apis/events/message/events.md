---
id: messageEvent
title: Message Events
sidebar_label: Message Events
slug: /apis/events/message/events
---

## **Namespace**

`Myckhel\ChatSystem\Events\Message\Events`

## **Broadcasts as**
- `Myckhel\\ChatSystem\\Events\\Message`

## **Broadcasts when**
- event type is not (`delete` and event is for `message` and is not `conversation_id`)

## **Broadcasts with**
- `event`  type `Myckhel\ChatSystem\Contracts\IChatEvent`
- `conversation_id`  type `int`

## **Broadcasts on channels**
- `private-message-event.user.{$participant_id}`
