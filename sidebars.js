module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Chat System',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro'
        },
        {
          type: 'doc',
          id: 'install'
        },
        {
          type: 'doc',
          id: 'require'
        }
      ]
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Guides',
      items: [
        'guides/configure',
        'guides/providers',
        'guides/models',
        'guides/guides.routes',
        'guides/guides.conversation',
        'guides/guides.message',
        'guides/guides.chatEvent',
        'guides/broadcasts'
      ]
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Api Ref',
      items: [
        {
          collapsed: false,
          type: 'category',
          label: 'Models',
          items: [
            'apis/models/message',
            'apis/models/conversation',
            'apis/models/chatEvent'
          ]
        },
        {
          type: 'category',
          label: 'Events',
          collapsed: false,
          items: [
            'apis/events/message/messageEvent',
            'apis/events/message/messageCreated'
          ]
        },
        'apis/chatsystem'
      ]
    }
  ]
}
