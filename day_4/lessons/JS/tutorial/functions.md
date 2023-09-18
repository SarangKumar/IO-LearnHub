## Function Declaration

In JavaScript, functions are blocks of reusable code that can take inputs (parameters), perform operations, and optionally return a result. Here's an in-depth explanation of function components:

- **Function Name**: A function must have a unique name that identifies it. The name follows the same naming rules as variables.

- **Parameters (Inputs)**: Parameters are variables declared in the function's parentheses and act as placeholders for values you provide when calling the function. Functions can have zero or more parameters.

  ```javascript
  function greet(name) {
    // 'name' is a parameter
    console.log("Hello, " + name + "!");
  }
  ```

- **Function Body**: The function body is enclosed in curly braces `{}` and contains the code that is executed when the function is called.

- **Return Statement (Output)**: Functions can return a value using the `return` statement. The returned value can be used elsewhere in your code.

  ```javascript
  function add(x, y) {
    return x + y;
  }
  ```

- **Function Call**: To execute a function, you call it by its name, passing in arguments (values) for its parameters.

  ```javascript
  greet("Alice"); // Function call with an argument
  let sum = add(3, 5); // Function call with arguments and capturing the return value
  ```

### Different Types of Parameters

JavaScript functions can have different types of parameters based on their behavior and usage:

1. **Required Parameters**: These parameters are mandatory, and you must provide values for them when calling the function.

   ```javascript
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   greet("Alice"); // 'name' is a required parameter
   ```

2. **Default Parameters (ES6)**: You can assign default values to parameters. If an argument is not provided when calling the function, the default value is used.

   ```javascript
   function greet(name = "Guest") {
     console.log("Hello, " + name + "!");
   }
   greet(); // Uses the default value "Guest"
   ```

3. **Rest Parameters (ES6)**: The rest parameter allows you to pass an arbitrary number of arguments as an array. It's denoted by `...` before the parameter name.

   ```javascript
   function sum(...numbers) {
     let total = 0;
     for (let number of numbers) {
       total += number;
     }
     return total;
   }
   let result = sum(1, 2, 3, 4, 5); // 'numbers' is a rest parameter
   ```

4. **Named Parameters (Object Destructuring)**: You can pass arguments as properties of an object, making it easier to manage and document function inputs.

   ```javascript
   function createUser({ username, email, password }) {
     console.log(`Creating user: ${username}, ${email}, ${password}`);
   }
   createUser({
     username: "Alice",
     email: "alice@example.com",
     password: "secret",
   });
   ```

### Function Examples

Here are some examples illustrating different types of parameters and function usage:

#### Required Parameters:

```javascript
function add(x, y) {
  return x + y;
}
let result = add(3, 5); // result is 8
```

#### Default Parameters:

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet(); // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"
```

#### Rest Parameters:

```javascript
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
let result = sum(1, 2, 3, 4, 5); // result is 15
```

#### Named Parameters (Object Destructuring):

```javascript
function createUser({ username, email, password }) {
  console.log(`Creating user: ${username}, ${email}, ${password}`);
}
createUser({
  username: "Alice",
  email: "alice@example.com",
  password: "secret",
});
```
