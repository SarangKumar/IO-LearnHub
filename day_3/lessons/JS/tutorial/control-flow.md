## Control Flow

Control flow structures allow you to control the order in which statements are executed. Here are two key control flow constructs in JavaScript:

### Conditional Statements (if, else if, else)

Conditional statements let you execute code conditionally based on the evaluation of a condition:

- **if**: Executes a block of code if a condition is true.

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

- **else if**: Allows you to specify an alternative condition to check if the first one is false.

```javascript
let age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
}
```

- **else**: Executes a block of code if no previous conditions are true.

```javascript
  let age = 10;
  if (age >= 18) {
    console.log("You are an adult.");
  } else if (age >= 13) {
    console.log("You are a teenager.");
  } else {
    console.log("You are a child.");
  }
```

### Loops (for, while)

Loops allow you to execute a block of code repeatedly. Two common types of loops are:

- **for**: Used when you know the number of iterations in advance. It consists of an initialization, a condition, and an increment.

```javascript
  for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
  }
```

- **while**: Used when the number of iterations is not known in advance. It repeats a block of code as long as a condition is true.

```javascript
  let count = 0;
  while (count < 3) {
    console.log("Count: " + count);
    count++;
  }
```

These control flow constructs are essential for making decisions and creating loops to perform repetitive tasks in your code.
