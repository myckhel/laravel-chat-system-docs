---
id: intro
title: Simple Laravel Chat Package
sidebar_label: Introduction
slug: /
---

## `Overview`

This package allows you to integrate chatting into your laravel application.

## Features
Here are the main features chat system provides.

### Conversation
The package gives you [conversation](./apis/models/conversation) support which can have multiple participants.
[conversation](./apis/models/conversation) can be of types such as:
- `private` conversation type
- `group` conversation type
- `issue` conversation type

### Message
The package gives you flexible [message](./apis/models/message) support which can belong to a [conversation](./apis/models/conversation) and authored by a user.
[message](./apis/models/message) can be of types such as:
- `user` message type
- `system` message type
- `activity` message type

### Chat Events
The package gives you [chat events](./apis/models/chatevent) support which could be use for persisting events for [message](./apis/models/message) and [conversation](./apis/models/conversation).

[chat events](./apis/models/chatevent) can be of types such as:
- `read`
- `delete`
- `deliver`
