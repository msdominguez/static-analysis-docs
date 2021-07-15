(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[717],{1619:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],l={sidebar_position:3},r="Writing a custom lint rule",c={unversionedId:"writing-a-custom-lint-rule",id:"writing-a-custom-lint-rule",isDocsHomePage:!1,title:"Writing a custom lint rule",description:"1. Parse a file, so you can see how node types are identified (see Parsing a file). Also look at the file internal/ast/index.ts (AnyNode) to see a list of node types.",source:"@site/docs/writing-a-custom-lint-rule.md",sourceDirName:".",slug:"/writing-a-custom-lint-rule",permalink:"/static-analysis-docs/docs/writing-a-custom-lint-rule",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/writing-a-custom-lint-rule.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Helpful Links",permalink:"/static-analysis-docs/docs/helpful-links"}},u=[],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-a-custom-lint-rule"},"Writing a custom lint rule"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Parse a file, so you can see how node types are identified (see ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/parsing-a-file"},"Parsing a file"),"). Also look at the file ",(0,o.kt)("inlineCode",{parentName:"li"},"internal/ast/index.ts")," (",(0,o.kt)("inlineCode",{parentName:"li"},"AnyNode"),") to see a list of node types."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/custom-lint-rule"},"Create a custom lint rule")),(0,o.kt)("li",{parentName:"ol"},"In your ","[no/use][concept]",".","[category]"," file (ex. noHaha.ts), write your lint rule")),(0,o.kt)("p",null,"example:"),(0,o.kt)("p",null,'Variable names cannot contain "lol" in them.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="noHaha.ts"',title:'"noHaha.ts"'},'import { createVisitor, signals } from \'@internal/compiler\';\nimport { descriptions } from \'@internal/diagnostics\';\n\nexport default createVisitor({\n    name: "js/noHaha",\n    enter(path) {\n        const { node } = path;\n\n        if (\n            node.type === "JSBindingIdentifier" &&\n            node.name.toLowerCase().includes("lol")\n        ) {\n            path.context.addNodeDiagnostic(node, descriptions.LINT.JS_NO_HAHA);\n        }\n\n        return signals.retain;\n    },\n});\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Add a message for the lint rule")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="internal/diagnostics/descriptions/lint.ts"',title:'"internal/diagnostics/descriptions/lint.ts"'},'export const lint = createDiagnosticsCategory({\n    JS_NO_HAHA: {\n        category: DIAGNOSTIC_CATEGORIES["lint/js/noHaha"],\n        message: markup`You cannot have lol in a variable name!`,\n    },\n    ...\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Write a test suite for your custom lint rule by writing tests in the ","[no/use][concept]",".test.toml file (ex. noHaha.test.toml)")),(0,o.kt)("p",null,"example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="noHaha.test.toml"',title:'"noHaha.test.toml"'},'filename = "file.ts"\ninvalid = [\n    """\n    let lolHaha = "1";\n    """,\n    """\n    let lol = "1";\n    """\n]\nvalid = [\n    """\n    let test = "1";\n    """\n]\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/commands/testing"},"Run the tests"))))}d.isMDXComponent=!0}}]);