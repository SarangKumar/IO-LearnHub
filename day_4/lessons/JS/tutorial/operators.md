# Operations

JavaScript supports various operations for manipulating data:

## Arithmetic Operations

### 1. Addition (+)

- Adds two numbers together.

```javascript
let result = 5 + 3; // 8
```

### 2. Subtraction (-)

- Subtracts one number from another.

```javascript
let result = 10 - 4; // 6
```

### 3. Multiplication (\*)

- Multiplies two numbers.

```javascript
let result = 6 * 7; // 42
```

### 4. Division (/)

- Divides one number by another.

```javascript
let result = 100 / 5; // 20
```

### 5. Modulus (%)

- Returns the remainder of a division operation.

```javascript
let result = 15 % 4; // 3
```

### 6. Increment (++)

- Increases a number by 1.

```javascript
let count = 5;
count++; // 6
```

### 7. Decrement (--)

- Decreases a number by 1.

```javascript
let count = 10;
count--; // 9
```

## Assignment Operations

### 1. Assignment (=)

- Assigns a value to a variable.

```javascript
let x = 5;
```

### 2. Addition Assignment (+=)

- Adds a value to a variable and assigns the result.

```javascript
let total = 10;
total += 5; // total is now 15
```

### 3. Subtraction Assignment (-=)

- Subtracts a value from a variable and assigns the result.

```javascript
let price = 20;
price -= 3; // price is now 17
```

### 4. Multiplication Assignment (\*=)

- Multiplies a variable by a value and assigns the result.

```javascript
let quantity = 4;
quantity *= 2; // quantity is now 8
```

### 5. Division Assignment (/=)

- Divides a variable by a value and assigns the result.

```javascript
let total = 50;
total /= 10; // total is now 5
```

### 6. Modulus Assignment (%=)

- Computes the modulus of a variable and assigns the result.

```javascript
let remainder = 15;
remainder %= 4; // remainder is now 3
```

I see what you mean. You're looking for information on JavaScript's comparison and logical operations. Here are some Markdown notes with code examples for these types of operations:

## Comparison Operations

### 1. Equality (==)

- Compares two values for equality, converting their types if necessary.
- Returns `true` if values are equal, `false` otherwise.

```javascript
5 == "5"; // true (type conversion)
5 == 7; // false
```

### 2. Inequality (!=)

- Compares two values for inequality, converting their types if necessary.
- Returns `true` if values are not equal, `false` otherwise.

```javascript
5 != "5"; // false (type conversion)
5 != 7; // true
```

### 3. Strict Equality (===)

- Compares two values for equality without type conversion.
- Returns `true` if values are equal in value and type, `false` otherwise.

```javascript
5 === "5"; // false (type mismatch)
5 === 5; // true
```

### 4. Strict Inequality (!==)

- Compares two values for inequality without type conversion.
- Returns `true` if values are not equal in value or type, `false` otherwise.

```javascript
5 !== "5"; // true (type mismatch)
5 !== 7; // true
```

### 5. Greater Than (>)

- Compares two values to check if the left value is greater than the right value.
- Returns `true` if the left value is greater, `false` otherwise.

```javascript
7 > 5; // true
5 > 7; // false
```

### 6. Less Than (<)

- Compares two values to check if the left value is less than the right value.
- Returns `true` if the left value is less, `false` otherwise.

```javascript
5 < 7; // true
7 < 5; // false
```

## Logical Operations

### 1. Logical AND (&&)

- Returns `true` if both operands are `true`, otherwise, it returns `false`.

```javascript
true && true; // true
true && false; // false
```

### 2. Logical OR (||)

- Returns `true` if at least one of the operands is `true`, otherwise, it returns `false`.

```javascript
true || false; // true
false || false; // false
```

### 3. Logical NOT (!)

- Returns the opposite boolean value of the operand.

```javascript
!true; // false
!false; // true
```

### 4. Combining Logical Operators

- You can combine logical operators to create more complex conditions.

```javascript
x > 5 && y < 10; // true if x > 5 and y < 10
a === 0 || b !== 0; // true if a is 0 or b is not 0
```

These are some of the operations that exisis in JavaScript. There are many more operations that you can use to manipulate data. You can find more information about these operations in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).
