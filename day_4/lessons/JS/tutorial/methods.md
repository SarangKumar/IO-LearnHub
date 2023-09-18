# Data type methods

## String Methods:

1. **`length`**: Returns the length of a string.

   ```javascript
   let message = "Hello, World!";
   let length = message.length; // length is 13
   ```

2. **`toUpperCase()`**: Converts the string to uppercase.

   ```javascript
   let message = "Hello, World!";
   let upperCaseMessage = message.toUpperCase(); // "HELLO, WORLD!"
   ```

3. **`toLowerCase()`**: Converts the string to lowercase.

   ```javascript
   let message = "Hello, World!";
   let lowerCaseMessage = message.toLowerCase(); // "hello, world!"
   ```

4. **`charAt(index)`**: Returns the character at the specified index.

   ```javascript
   let message = "Hello, World!";
   let charAtIndex = message.charAt(7); // "W"
   ```

5. **`indexOf(substring)`**: Returns the index of the first occurrence of a substring.

   ```javascript
   let message = "Hello, World!";
   let index = message.indexOf("World"); // index is 7
   ```

6. **`substring(start, end)`**: Extracts a portion of the string between `start` and `end` indexes.

   ```javascript
   let message = "Hello, World!";
   let extracted = message.substring(0, 5); // "Hello"
   ```

7. **`replace(oldValue, newValue)`**: Replaces occurrences of `oldValue` with `newValue`.

   ```javascript
   let message = "Hello, World!";
   let newMessage = message.replace("World", "Universe"); // "Hello, Universe!"
   ```

8. **`split(separator)`**: Splits a string into an array of substrings based on a specified separator.

   ```javascript
   let message = "Hello, World!";
   let parts = message.split(", "); // ["Hello", "World!"]
   ```

9. **`trim()`**: Removes whitespace (including spaces, tabs, and newlines) from both ends of a string.

   ```javascript
   let message = "   Hello, World!   ";
   let trimmedMessage = message.trim(); // "Hello, World!"
   ```

10. **`startsWith(prefix)`**: Checks if the string starts with a specified prefix and returns a boolean.

    ```javascript
    let message = "Hello, World!";
    let startsWithHello = message.startsWith("Hello"); // true
    ```

## Number Methods:

1. **`toFixed(digits)`**: Formats a number with a fixed number of decimal places.

   ```javascript
   let number = 3.14159265359;
   let formattedNumber = number.toFixed(2); // "3.14"
   ```

2. **`toPrecision(precision)`**: Formats a number to a specified precision.

   ```javascript
   let number = 123.456789;
   let formattedNumber = number.toPrecision(4); // "123.5"
   ```

3. **`parseInt(string)`**: Parses a string and returns an integer.

   ```javascript
   let number = parseInt("42");
   ```

4. **`parseFloat(string)`**: Parses a string and returns a floating-point number.

   ```javascript
   let number = parseFloat("3.14");
   ```

5. **`isNaN()`**: Checks if a value is NaN (Not-a-Number) and returns a boolean.

   ```javascript
   isNaN(NaN); // true
   isNaN(42); // false
   ```

6. **`isFinite()`**: Checks if a value is a finite number and returns a boolean.

   ```javascript
   isFinite(Infinity); // false
   isFinite(42); // true
   ```

7. **`Math.abs()`**: Returns the absolute value of a number.

   ```javascript
   Math.abs(-5); // 5
   ```

8. **`Math.pow(base, exponent)`**: Returns the result of raising a base to an exponent.

   ```javascript
   Math.pow(2, 3); // 8
   ```

9. **`Math.sqrt()`**: Returns the square root of a number.

   ```javascript
   Math.sqrt(16); // 4
   ```

10. **`Math.floor()`**: Rounds a number down to the nearest integer.

    ```javascript
    Math.floor(5.9); // 5
    ```

### Boolean Methods:

1. **`toString()`**: Converts a boolean to its string representation.

   ```javascript
   let isTrue = true;
   let isTrueString = isTrue.toString(); // "true"
   ```

2. **`valueOf()`**: Returns the primitive value of a boolean.

   ```javascript
   let isTrue = true;
   let primitiveValue = isTrue.valueOf(); // true
   ```

3. **`!` (Logical NOT)**: Inverts a boolean value.

   ```javascript
   let isTrue = true;
   let isFalse = !isTrue; // false
   ```

4. **`&&` (Logical AND)**: Combines two boolean values and returns true if both are true.

   ```javascript
   let isTrue = true;
   let isFalse = false;
   let result = isTrue && isFalse; // false
   ```

5. **`||` (Logical OR)**: Combines two boolean values and returns true if at least one is true.

   ```javascript
   let isTrue = true;
   let isFalse = false;
   let result = isTrue || isFalse; // true
   ```

6. **`==` (Equality)**: Compares two values for equality (with type coercion).

   ```javascript
   let a = 5;
   let b = "5";
   let isEqual = a == b; // true
   ```

7. **`!=` (Inequality)**: Compares two values for inequality (with type coercion).

   ```javascript
   let a = 5;
   let b = "5";
   let isNotEqual = a != b; // false
   ```

8. **`===` (Strict Equality)**: Compares two values for strict equality (checks both value and data type).

   ```javascript
   let a = 5;
   let b = "5";
   let isStrictEqual = a === b; // false
   ```

9. **`!==` (Strict Inequality)**: Compares two values for strict inequality (checks both value and data type).

   ```javascript
   let a = 5;
   let b = "5";
   let isStrictNotEqual = a !== b; // true
   ```

10. **`Object.is()` (ES6)**: Compares two values for strict equality (similar to `===`) with some differences, especially when dealing with special values like NaN and -0.

```javascript
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
```

Certainly! Here are 10 commonly used array methods in JavaScript:

## Array Manipulation Methods:

1. **`push()`**: Adds one or more elements to the end of an array and returns the new length of the array.

   ```javascript
   const fruits = ["apple", "banana"];
   const newLength = fruits.push("orange"); // Returns 3, fruits is now ['apple', 'banana', 'orange']
   ```

2. **`pop()`**: Removes the last element from an array and returns that element.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   const removedFruit = fruits.pop(); // Returns 'orange', fruits is now ['apple', 'banana']
   ```

3. **`unshift()`**: Adds one or more elements to the beginning of an array and returns the new length of the array.

   ```javascript
   const fruits = ["banana", "orange"];
   const newLength = fruits.unshift("apple"); // Returns 3, fruits is now ['apple', 'banana', 'orange']
   ```

4. **`shift()`**: Removes the first element from an array and returns that element.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   const removedFruit = fruits.shift(); // Returns 'apple', fruits is now ['banana', 'orange']
   ```

5. **`splice()`**: Changes the contents of an array by removing, replacing, or adding elements at a specified position.

   ```javascript
   const fruits = ["apple", "banana", "orange"];
   fruits.splice(1, 1, "grape"); // Removes 'banana' and adds 'grape', fruits is now ['apple', 'grape', 'orange']
   ```

## Array Access Methods:

6. **`concat()`**: Combines two or more arrays and returns a new array without modifying the original arrays.

   ```javascript
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const combined = arr1.concat(arr2); // Returns [1, 2, 3, 4]
   ```

7. **`slice()`**: Returns a shallow copy of a portion of an array into a new array.

   ```javascript
   const fruits = ["apple", "banana", "orange", "grape"];
   const selectedFruits = fruits.slice(1, 3); // Returns ['banana', 'orange']
   ```

## Array Iteration Methods:

8. **`forEach()`**: Executes a provided function once for each array element.

   ```javascript
   const numbers = [1, 2, 3];
   numbers.forEach((num) => console.log(num)); // Logs 1, 2, 3
   ```

9. **`map()`**: Creates a new array with the results of calling a provided function on every element in the array.

   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.map((num) => num * 2); // Returns [2, 4, 6]
   ```

10. **`filter()`**: Creates a new array with all elements that pass the test implemented by a provided function.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter((num) => num % 2 === 0); // Returns [2, 4]
    ```
