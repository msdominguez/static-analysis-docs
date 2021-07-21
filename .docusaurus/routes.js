
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/static-analysis-docs/',
  component: ComponentCreator('/static-analysis-docs/','313'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug','d6d'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/config',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/config','1b6'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/content',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/content','e1c'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/globalData','8d9'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/metadata','a42'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/registry','416'),
  exact: true,
},
{
  path: '/static-analysis-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/static-analysis-docs/__docusaurus/debug/routes','f5e'),
  exact: true,
},
{
  path: '/static-analysis-docs/markdown-page',
  component: ComponentCreator('/static-analysis-docs/markdown-page','9e7'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs',
  component: ComponentCreator('/static-analysis-docs/docs','3a7'),
  
  routes: [
{
  path: '/static-analysis-docs/docs/commands/custom-lint-rule',
  component: ComponentCreator('/static-analysis-docs/docs/commands/custom-lint-rule','447'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/commands/generate-all-files',
  component: ComponentCreator('/static-analysis-docs/docs/commands/generate-all-files','ce6'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/commands/parsing-a-file',
  component: ComponentCreator('/static-analysis-docs/docs/commands/parsing-a-file','f8b'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/commands/running-the-linter',
  component: ComponentCreator('/static-analysis-docs/docs/commands/running-the-linter','340'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/commands/testing',
  component: ComponentCreator('/static-analysis-docs/docs/commands/testing','a10'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/helpful-links',
  component: ComponentCreator('/static-analysis-docs/docs/helpful-links','810'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/intro',
  component: ComponentCreator('/static-analysis-docs/docs/intro','a48'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs/writing-a-custom-lint-rule',
  component: ComponentCreator('/static-analysis-docs/docs/writing-a-custom-lint-rule','e77'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
