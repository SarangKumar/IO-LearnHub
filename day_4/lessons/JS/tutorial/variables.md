# Variables

Variables are used to store and manage data in JavaScript. You can declare variables using `var`, `let`, or `const`. Here's a deeper look at each:

- `var`: Historically used for variable declaration. Variables declared with `var` have function scope (limited to the function where they are defined) or global scope (accessible anywhere in the code).

- `let`: Introduced in ES6, `let` provides block scope. This means it's confined to the nearest enclosing block (usually a pair of curly braces `{}`).

- `const`: Also introduced in ES6, `const` is used to declare constants. Constants cannot be reassigned after declaration.

```javascript
  var oldVariable = "I'm var!";
  let newerVariable = "I'm let!";
  const constantVariable = "I'm constant!";
```

## Difference between let, var and const

  |           |       var       | const |  let  |
  | :-------- | :-------------: | :---: | :---: |
  | scope     | global or local | block | block |
  | redeclare |       yes       |  no   |  no   |
  | reassign  |       yes       |  no   |  yes  |
  | hoisted   |       yes       |  no   |  no   |
