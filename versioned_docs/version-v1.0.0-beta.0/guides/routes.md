---
id: guides.routes
title: Using Routes
sidebar_label: Using Routes
slug: /guides/routes
---

ChatSystem provides basic usage through some route endpoints.
You may make use of them if suites your use cases.

Checkout api documentation for each route below: [Postman documentation link](https://documenter.getpostman.com/view/9558301/TzXwEyDq#83bc243b-8297-417d-9fd8-18a557e4826e).

```
+--------+---------------+------------------------------------------------------------+-----------------------------+--------------------------------------------------------------------+---------------------------------------------+
| Domain | Method        | URI                                                        | Name                        | Action                                                             | Middleware                                  |
+--------+---------------+------------------------------------------------------------+-----------------------------+--------------------------------------------------------------------+---------------------------------------------+
|        | GET|HEAD      | api/chat_events                                            | chat_events.index           | Myckhel\ChatSystem\Http\Controllers\ChatEventController@index      | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | POST          | api/chat_events                                            | chat_events.store           | Myckhel\ChatSystem\Http\Controllers\ChatEventController@store      | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/chat_events/{chat_event}                               | chat_events.show            | Myckhel\ChatSystem\Http\Controllers\ChatEventController@show       | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | PUT|PATCH     | api/chat_events/{chat_event}                               | chat_events.update          | Myckhel\ChatSystem\Http\Controllers\ChatEventController@update     | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | DELETE        | api/chat_events/{chat_event}                               | chat_events.destroy         | Myckhel\ChatSystem\Http\Controllers\ChatEventController@destroy    | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/conversations                                          | conversations.index         | Myckhel\ChatSystem\Http\Controllers\ConversationController@index   | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | POST          | api/conversations                                          | conversations.store         | Myckhel\ChatSystem\Http\Controllers\ConversationController@store   | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/conversations/count                                    | generated::qP7MgZeXOQ2KO9kH | Myckhel\ChatSystem\Http\Controllers\ConversationController@count   | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/conversations/{conversation}                           | conversations.show          | Myckhel\ChatSystem\Http\Controllers\ConversationController@show    | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | PUT|PATCH     | api/conversations/{conversation}                           | conversations.update        | Myckhel\ChatSystem\Http\Controllers\ConversationController@update  | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | DELETE        | api/conversations/{conversation}                           | conversations.destroy       | Myckhel\ChatSystem\Http\Controllers\ConversationController@destroy | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | DELETE        | api/messages                                               | generated::P5UtLfEaXJNWQUcU | Myckhel\ChatSystem\Http\Controllers\MessageController@delete       | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/messages                                               | messages.index              | Myckhel\ChatSystem\Http\Controllers\MessageController@index        | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | POST          | api/messages                                               | messages.store              | Myckhel\ChatSystem\Http\Controllers\MessageController@store        | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | GET|HEAD      | api/messages/{message}                                     | messages.show               | Myckhel\ChatSystem\Http\Controllers\MessageController@show         | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | PUT|PATCH     | api/messages/{message}                                     | messages.update             | Myckhel\ChatSystem\Http\Controllers\MessageController@update       | App\Http\Middleware\Authenticate:sanctum    |
|        |               |                                                            |                             |                                                                    | api                                         |
|        | DELETE        | api/messages/{message}                                     | messages.destroy            | Myckhel\ChatSystem\Http\Controllers\MessageController@destroy      | App\Http\Middleware\Authenticate:sanctum    |
+--------+---------------+------------------------------------------------------------+-----------------------------+--------------------------------------------------------------------+---------------------------------------------+
```
