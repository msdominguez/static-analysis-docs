---
sidebar_position: 1
---

# Creating a custom lint rule

`./script lint-create-rule [category]/[ruleName]`

* ruleName starts with 'use' to mandate or  'no'  to forbid
* category = ts, js, jsx, css, html, react, regex, or a11y (lint category folders in [internal/compiler/lint/rules](https://github.com/rome/tools/tree/main/internal/compiler/lint/rules))

example:

`./script lint-create-rule ts/noHaha`