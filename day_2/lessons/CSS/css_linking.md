# Adding CSS to HTML

## CSS Syntax

```CSS
 Selector {
  	Property 1 : value;
    Property 2 : value;
    Property 3 : value;
    }

```
 For example:
```CSS
h1{
    color: red;
    text-align: center;
}

#unique{
    color: green;
}
```

- Selector: selects the element you want to target
- Always remains the same whether we apply internal or - external styling 
- There are few basic selectors like tags, id’s, and classes
- All forms this key-value pair
- Keys: properties(attributes) like color, font-size, - background, width, height,etc
- Value: values associated with these properties

## Comments in CSS



## Linking CSS to HTML

There are three primary ways to link CSS stylesheets to HTML documents:

> Priority order 
Inline > Internal > External

### 1. **External CSS Linking**

External CSS linking involves creating a separate CSS file and linking it to an HTML document. This is the most common method for applying styles to a web page. You use the `<link>` element in the `<head>` section of your HTML document to reference the external CSS file.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
```

### 2. **Internal CSS**

Internal CSS, also known as embedded CSS, is added directly within the `<style>` element in the `<head>` section of an HTML document. This method is useful when you want to apply styles to a single page only.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #f0f0f0;
      }
      h1 {
        color: #333;
      }
    </style>
  </head>
  <body>
    <!-- Your HTML content here -->
  </body>
</html>
```

### 3. **Inline CSS**

Inline CSS is applied directly to individual HTML elements using the `style` attribute. It's useful for applying styles to specific elements without affecting others. However, it's generally not recommended for styling entire pages due to maintenance issues.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- No external or internal CSS here -->
  </head>
  <body>
    <p style="color: blue;">This is a blue text.</p>
    <p style="font-size: 16px;">This text has a font size of 16px.</p>
  </body>
</html>
```

These are the three primary methods for linking CSS to HTML documents. The choice of which method to use depends on your project's requirements and organization preferences. External CSS linking is the most common and recommended approach for styling multiple pages consistently.

[Read Prev: README](/day_2/lessons/CSS/README.md)
[Read Next: Selectors](/day_2/lessons/CSS/selectors.md)
