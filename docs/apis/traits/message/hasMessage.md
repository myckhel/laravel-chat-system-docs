---
id: hasMessage
title: HasMessage APIs
sidebar_label: HasMessage
slug: /apis/traits/message/hasMessage
---

## **Namespace**

`Myckhel\ChatSystem\Traits\ChatEvent`


### `messages()`

> adds query for model's messages

#### @Return
- type `QueryBuilder`

#### @Params
- **`?conversation`** | conversation messages to query for | `IConversation|int`

#### @Params
- **`?otherUser`** | adds where otherUser belongs to message  | `string`

#### @Params
- **`?reply`** | adds where reply query | `array`

#### @Params
- **`?type`** | adds where type query | `string`

### `undelivered()`

> adds query for model where it messages has not been delivered

#### @Return
- type `QueryBuilder`

### `conversations()`

> adds query for model's conversations

#### @Return
- type `QueryBuilder`

#### @Params
- **`?conversation`** | conversations to query for | `IConversation|int`

#### @Params
- **`?otherUser`** | adds where otherUser is a participant | `string`

#### @Params
- **`?type`** | adds where type query | `string`

### `relatedToMessage()`

> checks wherther model is related to the given message

#### @Return
- type `bool`

#### @Params
- **`?message`** | message to compare relation with | `IMessage`

### `relatedToConversation()`

> checks wherther model is related to the given conversation

#### @Return
- type `bool`

#### @Params
- **`?conversation`** | conversation to compare relation with | `IConversation`
