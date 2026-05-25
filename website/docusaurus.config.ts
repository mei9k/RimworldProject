import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const [repoOwner = 'mei9k', repoName = 'RimworldProject'] =
  (process.env.GITHUB_REPOSITORY ?? 'mei9k/RimworldProject').split('/');

const isUserSite = repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;

const config: Config = {
  title: 'RimworldProject Docs',
  tagline: 'Sistema y universo de rol sci-fi',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Produccion para GitHub Pages
  url: `https://${repoOwner}.github.io`,
  baseUrl: isUserSite ? '/' : `/${repoName}/`,

  organizationName: repoOwner,
  projectName: repoName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: path.resolve(__dirname, '../docs'),
          routeBasePath: '/',
          numberPrefixParser: false,
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${repoOwner}/${repoName}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RimworldProject',
      logo: {
        alt: 'RimworldProject Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        {
          href: `https://github.com/${repoOwner}/${repoName}`,
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
              label: 'Indice general',
              to: '/00-indice',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${repoOwner}/${repoName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RimworldProject. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
