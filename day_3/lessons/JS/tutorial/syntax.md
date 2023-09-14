## JavaScript Syntax

JavaScript code is a series of instructions that a computer can understand. Here are some fundamental syntax rules:

- **Statements**: JavaScript programs consist of statements. Each statement typically ends with a semicolon (;), although in some cases, it's optional.

   ```javascript
   let x = 5; // This is a statement
   ```

- **Case Sensitivity**: JavaScript is case-sensitive, meaning that `myVariable` and `myvariable` are treated as distinct variables.

   ```javascript
   let myVariable = "Hello";
   let myvariable = "World";
   ```

- **Comments**: Comments are used to annotate code for clarity and are not executed. In JavaScript, you can use two types of comments: single-line (`//`) and multi-line (`/* */`).

   ```javascript
   // This is a single-line comment

   /*
      This is a
      multi-line comment
   */
   ```

## Functions

Functions are reusable blocks of code that perform specific tasks. They help you organize and structure your code for better readability and maintainability. Here's a more detailed explanation of functions:

### Function Declaration

You can declare functions in JavaScript using the `function` keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

- `function`: The keyword used to declare a function.
- `greet`: The name of the function.
- `(name)`: The parameter(s) the function accepts. Parameters are like placeholders for values you pass when calling the function.
- `{}`: The block of code that defines what the function does.
