
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','8a5'),
  
  routes: [
{
  path: '/docs/commands/custom-lint-rule',
  component: ComponentCreator('/docs/commands/custom-lint-rule','99c'),
  exact: true,
},
{
  path: '/docs/commands/parsing-a-file',
  component: ComponentCreator('/docs/commands/parsing-a-file','c1c'),
  exact: true,
},
{
  path: '/docs/commands/running-the-linter',
  component: ComponentCreator('/docs/commands/running-the-linter','b19'),
  exact: true,
},
{
  path: '/docs/commands/testing',
  component: ComponentCreator('/docs/commands/testing','2a0'),
  exact: true,
},
{
  path: '/docs/docusaurus-markdown-features',
  component: ComponentCreator('/docs/docusaurus-markdown-features','41e'),
  exact: true,
},
{
  path: '/docs/helpful-links',
  component: ComponentCreator('/docs/helpful-links','387'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/writing-a-custom-lint-rule',
  component: ComponentCreator('/docs/writing-a-custom-lint-rule','d05'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
