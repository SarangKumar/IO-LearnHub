## Variables and Data Types

### Variables

Variables are used to store and manage data in JavaScript. You can declare variables using `var`, `let`, or `const`. Here's a deeper look at each:

- `var`: Historically used for variable declaration. Variables declared with `var` have function scope (limited to the function where they are defined) or global scope (accessible anywhere in the code).

- `let`: Introduced in ES6, `let` provides block scope. This means it's confined to the nearest enclosing block (usually a pair of curly braces `{}`).

- `const`: Also introduced in ES6, `const` is used to declare constants. Constants cannot be reassigned after declaration.

```javascript
  var oldVariable = "I'm var!";
  let newerVariable = "I'm let!";
  const constantVariable = "I'm constant!";
```

#### Difference between let, var and const

  |           |       var       | const |  let  |
  | :-------- | :-------------: | :---: | :---: |
  | scope     | global or local | block | block |
  | redeclare |       yes       |  no   |  no   |
  | reassign  |       yes       |  no   |  yes  |
  | hoisted   |       yes       |  no   |  no   |


### Data Types

JavaScript has several primitive data types:

- **String**: Represents text and is enclosed in single (`'`) or double (`"`) quotes.

  ```javascript
  let greeting = "Hello, World!";
  ```

- **Number**: Represents both integers and floating-point numbers.

  ```javascript
  let age = 25;
  let price = 19.99;
  ```

- **Boolean**: Represents true or false values.

  ```javascript
  let isUserLoggedIn = true;
  ```

- **Undefined**: Variables that have been declared but haven't been assigned a value are `undefined`.

  ```javascript
  let undefinedVariable;
  ```

- **Null**: Represents the absence of any object value.

  ```javascript
  let emptyValue = null;
  ```

- **Symbol** (ES6): Used for creating unique identifiers.

  ```javascript
  const uniqueID = Symbol("description");
  ```

## Data Type Methods

Each data type in JavaScript comes with various built-in methods (functions) that you can use to manipulate and work with data. For example:

### String Methods

Strings have a multitude of built-in methods for various operations:

- `length`: Returns the length of the string.

  ```javascript
  let message = "Hello, World!";
  let length = message.length; // length is 13
  ```

- `toUpperCase()`: Converts the string to uppercase.

  ```javascript
  let message = "Hello, World!";
  let upperCaseMessage = message.toUpperCase(); // "HELLO, WORLD!"
  ```

### Number Methods

Numbers have built-in methods as well:

- `Math.round()`: Rounds the number to the nearest integer.

  ```javascript
  let number = 42.567;
  let roundedNumber = Math.round(number); // roundedNumber is 43
  ```

JavaScript provides numerous other methods for working with different data types, but these examples should give you a sense of how data types and their methods work.

To know more about methods click [this](/day_3/lessons/JS/tutorial/methods.md)

## Operations

JavaScript supports various operations for manipulating data:

### Arithmetic Operations

JavaScript supports standard arithmetic operations:

- **Addition (+)**
- **Subtraction (-)**
- **Multiplication (\*)**
- **Division (/)**
- **Modulus (%)** (returns the remainder after division)

  ```javascript
  let x = 10;
  let y = 5;
  let sum = x + y; // sum is 15
  let difference = x - y; // difference is 5
  let product = x * y; // product is 50
  let quotient = x / y; // quotient is 2
  let remainder = x % y; // remainder is 0
  ```

### Comparison Operations

Comparison operations compare values and return a boolean result:

- **Equality (==)**: Compares values for equality but performs type coercion (tries to convert values to the same type).

  ```javascript
  let a = 5;
  let b = "5";
  let isEqual = a == b; // isEqual is true
  ```

- **Inequality (!=)**: Compares values for inequality with type coercion.

  ```javascript
  let a = 5;
  let b = "5";
  let isNotEqual = a != b; // isNotEqual is false
  ```

- **Strict Equality (===)**: Compares values for equality without type coercion (checks both value and data type).

  ```javascript
  let a = 5;
  let b = "5";
  let isStrictEqual = a === b; // isStrictEqual is false
  ```

- **Strict Inequality (!==)**: Compares values for inequality without type coercion.

  ```javascript
  let a = 5;
  let b = "5";
  let isStrictNotEqual = a !== b; // isStrictNotEqual is true
  ```

### Logical Operations

Logical operations are used to work with boolean values:

- **Logical AND (`&&`)**: Returns true if both operands are true.

  ```javascript
  let isTrue = true;
  let isFalse = false;
  let result = isTrue && isFalse; // result is false
  ```

- **Logical OR (`||`)**: Returns true if at least one operand is true.

  ```javascript
  let isTrue = true;
  let isFalse = false;
  let result = isTrue || isFalse; // result is true
  ```

- **Logical NOT (`!`)**: Inverts the boolean value.

  ```javascript
  let isTrue = true;
  let result = !isTrue; // result is false
  ```

These operations allow you to perform various calculations and make decisions in your code.
