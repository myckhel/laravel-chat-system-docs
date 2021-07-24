// const theme = require('prism-react-renderer/themes/github')
const darkTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Laravel Chat System',
  tagline: 'Simple Laravel Chat Library',
  url: 'https://myckhel.github.io',
  baseUrl: '/laravel-chat-system/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myckhel', // Usually your GitHub org/user name.
  projectName: 'laravel-chat-system', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['php'],
      defaultLanguage: 'php',
      darkTheme,
      theme: darkTheme
    },
    navbar: {
      title: 'Laravel Chat System',
      logo: {
        alt: 'Laravel Chat System',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/myckhel/laravel-chat-system-docs',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href:
                'https://stackoverflow.com/questions/tagged/laravel-chat-system'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/myckhel/laravel-chat-system'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Laravel Chat System, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/myckhel/laravel-chat-system-docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/myckhel/laravel-chat-system-docs/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
