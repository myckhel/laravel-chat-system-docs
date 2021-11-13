---
id: install
title: Installation
sidebar_label: Installation
slug: /install
---

## `Install`
Via Composer
```bash
composer require myckhel/laravel-chat-system
```

## `Setup`

### Publishing the config file
```bash
php artisan vendor:publish --provider="Myckhel\ChatSystem\ChatSystemServiceProvider" --tag='config'
```
`chat-system.php` should be copied to the `config` directory

### Publishing the migrations files
```bash
php artisan vendor:publish --provider="Myckhel\ChatSystem\ChatSystemServiceProvider" --tag='migrations'
```
migration files should be copied to the `database/migrations` directory

### Publishing the seeders files
```bash
php artisan vendor:publish --provider="Myckhel\ChatSystem\ChatSystemServiceProvider" --tag='seeders'
```
seeders files should be copied to the `database/seeders` directory

### Publishing the factories files
```bash
php artisan vendor:publish --provider="Myckhel\ChatSystem\ChatSystemServiceProvider" --tag='factories'
```
factories files should be copied to the `database/factories` directory

### Publishing all resources files
```bash
php artisan vendor:publish --provider="Myckhel\ChatSystem\ChatSystemServiceProvider"
```
all resources files should be copied to the respective directories

## `Setup User Model`
In order to start working with chat-system, you need to setup your User model by implementing **IChatEventMaker** Interface and using the [HasMessage](/apis/traits/message/hasMessage.md), [CanMakeChatEvent](/apis/traits/chatEvent/canMakeChatEvent.md) Traits.

```php
use Myckhel\ChatSystem\Traits\Message\HasMessage;
use Myckhel\ChatSystem\Traits\ChatEvent\CanMakeChatEvent;
use Myckhel\ChatSystem\Contracts\IChatEventMaker;


class User implements IChatEventMaker
{
    use HasMessage, CanMakeChatEvent;
...
```
