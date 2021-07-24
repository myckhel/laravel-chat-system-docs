---
id: chatsystem
title: ChatSytem APIs
sidebar_label: ChatSytem
slug: /apis/chatsytem
---

## registerPolicies()
method to register policies ChatSystem provides.

```php
use ChatSystem;

ChatSystem::registerPolicies();
```

## registerObservers()
method to register observers ChatSystem provides.

#### @Params

- **`exclude`** | array of models name to exclude from register | `array`

```php
use ChatSystem;

ChatSystem::registerObservers(exclude: ['conversation' => true]);
```

## registerBroadcastRoutes()
method to register broadcast routes ChatSystem provides.

```php
use ChatSystem;

ChatSystem::registerBroadcastRoutes();
```

## async()
method to asynchronously call fuctions if only `laravel octane` is configured to use swoole otherwise call functions synchronously.

#### @Params

- **`calls`** | array of models name to exclude from register | `callback arguments`

```php
use ChatSystem;

ChatSystem::async(
  fn () => print(1),
  fn () => print(2),
  fn () => print(3),
);
```
