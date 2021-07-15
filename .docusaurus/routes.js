
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/static-analysis-docs/',
  component: ComponentCreator('/static-analysis-docs/','313'),
  exact: true,
},
{
  path: '/static-analysis-docs/markdown-page',
  component: ComponentCreator('/static-analysis-docs/markdown-page','9e7'),
  exact: true,
},
{
  path: '/static-analysis-docs/docs',
  component: ComponentCreator('/static-analysis-docs/docs','0bd'),
  
  routes: [
{
  path: '/static-analysis-docs/docs/commands/custom-lint-rule',
  component: ComponentCreator('/static-analysis-docs/docs/commands/custom-lint-rule','447'),
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
