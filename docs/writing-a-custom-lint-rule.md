---
sidebar_position: 3
---

# Writing a custom lint rule

1. Parse a file, so you can see how node types are identified (see [Parsing a file](/docs/commands/parsing-a-file))
2. [Create a custom lint rule](/docs/commands/custom-lint-rule)
3. In your [no/use][concept].[category] file (ex. noHaha.ts), write your lint rule

example:

noHaha.ts - variable names cannot contain "lol" in them
```
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

4. Write a test suite for your custom lint rule by writing tests in the [no/use][concept].test.toml file (ex. noHaha.test.toml)

example:
```
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

5. [Run the tests](/docs/commands/testing)