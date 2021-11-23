const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'TW-CAT',
  tagline: '技术写作与计算机辅助翻译',
  url: 'https://tw-cat.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hktang13',
  projectName: 'tw-cat',
  i18n: {defaultLocale: 'zh', locales: ['zh']},
  plugins: ['@docusaurus/plugin-google-analytics'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hktang13/tw-cat/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hktang13/tw-cat/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAnalytics: {
        trackingID: 'UA-294477239-1',
      },
      navbar: {
        title: 'TW-CAT',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'toc/prologue',
            position: 'left',
            label: '课程',
          },
          {to: '/blog', label: '日志', position: 'left'},
          {
            href: 'https://github.com/hktang13/tw-cat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '模块',
            items: [
              {
                label: '技术写作',
                to: '/docs/tw/intro',
              },
              {
                label: '计算机辅助翻译',
                to: '/docs/cat/intro',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Markdown',
                href: 'https://daringfireball.net/projects/markdown/syntax',
              }
            ],
          },
          {
            title: '源码',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hktang13/tw-cat',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/hktang13/tw-cat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TW-CAT. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
