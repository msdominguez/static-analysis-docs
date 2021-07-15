---
sidebar_position: 3
---

# Writing a custom lint rule

1. Parse a file, so you can see how node types are identified (see [Parsing a file](/docs/commands/parsing-a-file)). Also look at the file [internal/ast/index.ts](https://github.com/rome/tools/blob/main/internal/ast/index.ts) (`AnyNode`) to see a list of node types.
2. [Create a custom lint rule](/docs/commands/custom-lint-rule)
3. In your [no/use][concept].[category] file (ex. noHaha.ts), write your lint rule

example:

Variable names cannot contain "lol" in them.
```jsx title="noHaha.ts"
import { createVisitor, signals } from '@internal/compiler';
import { descriptions } from '@internal/diagnostics';

export default createVisitor({
	name: "js/noHaha",
	enter(path) {
		const { node } = path;

		if (
			node.type === "JSBindingIdentifier" &&
			node.name.toLowerCase().includes("lol")
		) {
			path.context.addNodeDiagnostic(node, descriptions.LINT.JS_NO_HAHA);
		}

		return signals.retain;
	},
});
```

4. Add a message for the lint rule
```jsx title="internal/diagnostics/descriptions/lint.ts"
export const lint = createDiagnosticsCategory({
	JS_NO_HAHA: {
		category: DIAGNOSTIC_CATEGORIES["lint/js/noHaha"],
		message: markup`You cannot have lol in a variable name!`,
	},
    ...
```


5. Write a test suite for your custom lint rule by writing tests in the [no/use][concept].test.toml file (ex. noHaha.test.toml)

example:
```jsx title="noHaha.test.toml"
filename = "file.ts"
invalid = [
	"""
	let lolHaha = "1";
	""",
	"""
	let lol = "1";
	"""
]
valid = [
	"""
	let test = "1";
	"""
]
```

6. [Run the tests](/docs/commands/testing)