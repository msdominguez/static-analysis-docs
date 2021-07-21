---
sidebar_position: 2
---

# Parsing a file

`./rome parse [file_name]`

```jsx title="file_name.ts"
const a = 'one';

var b = 2;

let c = 12;

const { abc } = { abc: 321 };
```

the output given this file shows the AST representation of the syntax:

```
JSRoot {
  body: [
    JSVariableDeclarationStatement {
      declaration: JSVariableDeclaration {
        kind: "const"
        declarations: [
          JSVariableDeclarator {
            id: JSBindingIdentifier {name: "a"}
            init: JSStringLiteral {value: "one"}
          }
        ]
      }
    }
    JSVariableDeclarationStatement {
      declaration: JSVariableDeclaration {
        kind: "const"
        declarations: [
          JSVariableDeclarator {
            id: JSBindingIdentifier {name: "b"}
            init: JSNumericLiteral {value: 2}
          }
        ]
      }
    }
    JSVariableDeclarationStatement {
      declaration: JSVariableDeclaration {
        kind: "let"
        declarations: [
          JSVariableDeclarator {
            id: JSBindingIdentifier {name: "c"}
            init: JSNumericLiteral {value: 12}
          }
        ]
      }
    }
    JSVariableDeclarationStatement {
      declaration: JSVariableDeclaration {
        kind: "const"
        declarations: [
          JSVariableDeclarator {
            id: JSBindingObjectPattern {
              properties: [
                JSBindingObjectPatternProperty {
                  key: JSStaticPropertyKey {
                    value: JSIdentifier {name: "abc"}
                  }
                  value: JSBindingIdentifier {name: "abc"}
                }
              ]
            }
            init: JSObjectExpression {
              properties: [
                JSObjectProperty {
                  key: JSStaticPropertyKey {
                    value: JSIdentifier {name: "abc"}
                  }
                  value: JSNumericLiteral {value: 321}
                }
              ]
            }
          }
        ]
      }
    }
  ]
  comments: []
  corrupt: false
  diagnostics: []
  directives: []
  hasHoistedVars: false
  sourceType: "module"
  syntax: ["ts"]
  integrity: {hash: "977f48597780fc99f16a32084caf5a3dabbd382ab9674d8f218cfdca39ca560c"}
  path: UIDPath<project-rome/scratch.ts>
}
```

This output helps you write your custom lint rule.
