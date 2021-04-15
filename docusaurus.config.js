/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Laravel Chat System',
  tagline: 'Simple Laravel Chat Library',
  url: 'https://myckhel.github.io',
  baseUrl: '/laravel-chat-system-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myckhel', // Usually your GitHub org/user name.
  projectName: 'laravel-chat-system', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'php',
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Laravel Chat System',
      logo: {
        alt: 'Laravel Chat System',
        src: 'img/logo.svg',
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
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/myckhel/laravel-chat-system-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/laravel-chat-system',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/myckhel/laravel-chat-system',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Laravel Chat System, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
