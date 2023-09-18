# CSS Selectors

CSS (Cascading Style Sheets) selectors are used to target and apply styles to HTML elements on a web page. There are several types of selectors in CSS, each with its own way of targeting elements. Here's a markdown description of some common CSS selectors with examples:

### 1. **Universal Selector (*)**

The universal selector targets all elements on a page.

Example:
```css
* {
    margin: 0;
    padding: 0;
}
```

### 2. **Type Selector**

Type selectors target elements based on their HTML tag names.

Example:
```css
p {
    font-size: 16px;
}
```

### 3. **Class Selector (.)**

Class selectors target elements with a specific class attribute.

Example:
```css
.button {
    background-color: #3498db;
    color: #fff;
}
```

HTML:
```html
<button class="button">Click me</button>
```

### 4. **ID Selector (#)**

ID selectors target a single element with a specific ID attribute.

Example:
```css
#header {
    font-size: 24px;
}
```

HTML:
```html
<div id="header">Welcome to my website</div>
```

### 5. **Attribute Selector**

Attribute selectors target elements with a specific attribute and, optionally, a specific attribute value.

Example:
```css
input[type="text"] {
    border: 1px solid #ccc;
}
```

### 6. **Descendant Selector (whitespace)**

Descendant selectors target elements that are descendants of a specified element.

Example:
```css
ul li {
    list-style-type: square;
}
```

### 7. **Child Selector (>)**

Child selectors target elements that are direct children of a specified element.

Example:
```css
ul > li {
    font-weight: bold;
}
```

### 8. **Adjacent Sibling Selector (+)**

Adjacent sibling selectors target elements that are immediately preceded by a specified element.

Example:
```css
h2 + p {
    margin-top: 10px;
}
```

### 9. **General Sibling Selector (~)**

General sibling selectors target elements that share the same parent and come after a specified element.

Example:
```css
h2 ~ p {
    font-style: italic;
}
```

### 10. **Pseudo-class Selector ( : )**

Pseudo-class selectors target elements in a specific state or condition.

Example:
```css
a:hover {
    color: #ff0000;
}
```

These are some of the most commonly used CSS selectors. CSS allows for a wide range of selector combinations and specificity rules, enabling precise control over styling elements on a web page.

[Read Prev: Linking](/day_2/lessons/CSS/css_linking.md)
[Read Next: Basic CSS Properties](/day_2/lessons/CSS/properties.md)