# Instructions

In the file titled "index.js", there are nine functions written in JavaScript.

The code, as is, doesn't work. Your job is to fill in the function bodies according to the comments. They're all based on real javascript functions. You can read more on the left panel of <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

Beneath most functions are test cases. Your job is to make sure the output matches the test cases, and to provide test cases to the functions that lack them. Remember, printing is done via `console.log()` even in this environment.

Something else to note is that the functions are declared with the function keyword. While there is nothing inherently wrong or egregiously inappropriate with doing so, let's rewrite each function declaration (and callback) with ES6 arrow function syntax in mind. This will add another tool to your toolkit, and will also come in handy when working with functions in React components.

Lastly, please substitute all "var" (function-scoped) keywords with "let" or "const" keywords in order to lexically (block) scope our variables so that we can maintain appropriate accessibility to them. We should prioritize using "let" and "const" and rarely, if ever, use "var" in order to achieve finer control/maintainability of our codebase and to limit susceptibility to errors.

Also, be mindful of the following:

In any closures created in the loop, "let" variables will be bound to the value from only that iteration of the loop, whereas "var" variables will be the current value of the variable.

For example:

```
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}

// printed to screen: 0,1,2,3,4;
// after this loop terminates, i is garbage collected;

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}

// printed to screen: 5,5,5,5,5;
// after this loop terminates, i will be accessible and will have value of 5, which unnecessarily occupies space in memory (albeit a negligible amount) and doesn't have a meaningful purpose;
```

Aside from all of that, please familiarize yourself with the different ways of iterating over arrays and objects, the nature of callbacks, and the different higher-order functions (forEach, filter, map, reduce, sort).

Happy refactoring!

# How to Submit

Either:
- Sign up for an account with REPL
- Modify your copy/version of this REPL
- Refactor accordingly
- Send the link to your REPL to me

Or:
- copy the code into a file on your local system
- edit in your text editor
- test it by running the command `node index.js`
- make a Gist (github snippet) and share it with me @EdMaxPrime