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

the output given this file is:

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
            id: JSBindingIdentifier {name: "lolz"}
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
  integrity: {hash: "0828f82046d593b48a1b2e11e7e35da05c0ddccdc458faa1fdf59b59aa0b2b06"}
  path: UIDPath<project-rome/scratch.ts>
}
```
