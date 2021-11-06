---
id: providers
title: ChatSystem Providers
sidebar_label: Using Providers
slug: /guides/providers
---

## Registering Providers

### `Registering Observers`

ChatSystem provides observer to listen to model events.
Make sure you register the observers in your Application Service Provider.

```php
// App\Providers\AppServiceProvider.php

use ChatSystem;
...
  public function boot()
  {
    ...

    ChatSystem::registerObservers();
  }
```

### `Registering Policies`

ChatSystem provides policies to authenticate its api endpoints.
Make sure you register the policies in your application Auth Service Provider if you are using Built in ChatSystem api endpoints.

```php
// App\Providers\AuthServiceProvider.php

use ChatSystem;
...
  public function boot()
  {
    ...

    ChatSystem::registerPolicies();
  }
```

### `Registering Broadcast Routes`

ChatSystem provides broadcast routes to broadcast events on some specific channels.
Make sure you register the broadcast routes in your Broadcast Service Provider if you will be listening to the broadcast channels provided by ChatSystem.

```php
// App\Providers\BroadcastServiceProvider.php

use ChatSystem;
...
  public function boot()
  {
    ...

    ChatSystem::registerBroadcastRoutes();
  }
```

## Overriding Providers
### `Overriding ChatSystem Observer Methods`

You may want to overried some specific Observers methods.
For example you may want to create system messages everytime a conversation is created.

```php
...
namespace App\Observers;
use Myckhel\ChatSystem\Observers\ConversationObserver as BaseConversationObserver;
use Myckhel\ChatSystem\Contracts\IConversation;

class ConversationObserver extends BaseConversationObserver
{
  /**
   * Handle the conversation "created" event.
   *
   * @param  \Myckhel\ChatSystem\Contracts\IConversation  $conversation
   * @return void
   */
  public function created(IConversation $conversation)
  {
    $messages = $conversation->messages()->createMany([
      [
        'user_id' => $conversation->user_id,
        'message' => trans('msg.chat.system.safety'),
        'type' => 'system'
      ],
      [
        'user_id' => $conversation->user_id,
        'message' => trans('msg.chat.system.msg_desc'),
        'type' => 'system'
      ],
    ]);
  }
}
```
Then you have to unregister the extended observer registered with `ChatSystem::registerObservers()` by passing `exclude` argument.
```php
// App\Providers\AppServiceProvider.php

use ChatSystem;
use App\Models\Conversation;
use App\Observers\ConversationObserver;
...
  public function boot()
  {
    ...

    ChatSystem::registerObservers(exclude: ['conversation' => true]);

    Conversation::observe(ConversationObserver::class);
  }
```

### `Overriding ChatSystem Policy Methods`

You may want to overried some specific Policy methods such as `view`, `delete` method.

```php
...
namespace App\Policies;

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Myckhel\ChatSystem\Policies\ConversationPolicy as CSCP;
use Myckhel\ChatSystem\Contracts\IConversation;
use Myckhel\ChatSystem\Contracts\ChatEventMaker;

class ConversationPolicy extends CSCP
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Conversation  $conversation
     * @return mixed
     */
    public function view(ChatEventMaker $user, IConversation $conversation)
    {
      return in_array($conversation->type, ['issue', 'group'])
        || $user->relatedToConversation($conversation);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Conversation  $conversation
     * @return mixed
     */
    public function delete(ChatEventMaker $user, IConversation $conversation)
    {
      return $user->relatedToConversation($conversation);
    }
}
```
