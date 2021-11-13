---
id: hasChatEvent
title: HasChatEvent APIs
sidebar_label: HasChatEvent
slug: /apis/traits/chatEvent/hasChatEvent
---

## **Namespace**

`Myckhel\ChatSystem\Traits\ChatEvent`


### `whereNotTrashed()`

> adds query where model does not have trashed items
> by the given maker.

#### @Return
- type `QueryBuilder`

#### @Params
- **`?made_id`** | chatEvent made_id to include | `int`


### `chatEvents()`

> Model has many chat_events

#### @Return
- type `MorphMany`


### `chatEvent()`

> Model has one chat_events

#### @Return
- type `MorphOne`


### `delivered()`

> Model has one delivered events

#### @Return
- type `MorphOne`

#### @Params
- **`?maker`** | chatEvent maker to include | `ChatEventMaker`

### `trashed()`

> Model has one trashed events

#### @Return
- type `MorphOne`

### `read()`

> Model has one read events

#### @Return
- type `MorphOne`
