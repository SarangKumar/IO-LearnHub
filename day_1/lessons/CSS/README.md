# CSS

CSS, or Cascading Style Sheets, is a language used for describing the presentation and visual styling of HTML documents. It defines how elements should be displayed on a web page, including aspects such as color, typography, layout, spacing, and more. CSS plays a critical role in separating the content and structure of a web page (handled by HTML) from its presentation, resulting in cleaner and more maintainable code.

Advantages of CSS:

1. **Separation of Concerns:** One of the primary benefits of CSS is its ability to separate content (HTML) from presentation (styling). This separation makes it easier to update and maintain a website's appearance without affecting the underlying content.

2. **Consistency:** CSS allows you to define styles in a centralized manner. This ensures a consistent look and feel across all pages of a website, promoting a professional and cohesive design.

3. **Reuse and Efficiency:** CSS enables the reuse of styles across multiple elements and pages. By defining styles once and applying them to multiple instances, you reduce redundancy and make your code more efficient.

<details>
<summary>Other Advantages</summary>

4. **Ease of Maintenance:** When you need to make design changes, CSS simplifies the process. Instead of editing every instance of a style, you can update the CSS rule and instantly apply the changes to all corresponding elements.

5. **Responsive Design:** CSS supports responsive design, which allows websites to adapt their layout and appearance based on different screen sizes and devices. This ensures a consistent user experience across platforms.

6. **Browser Compatibility:** CSS helps standardize how elements are displayed across different web browsers. This mitigates browser-specific inconsistencies and ensures a more uniform experience for users.

7. **Accessibility:** Properly structured CSS can enhance accessibility for users with disabilities. For instance, you can adjust font sizes, color contrasts, and element spacing to improve readability.

8. **Enhanced User Experience:** Well-designed CSS can make a website more engaging and user-friendly. Thoughtful use of color, typography, and spacing can enhance readability and guide users through the content.

9. **Print Styling:** CSS offers the ability to define separate styles for printed content. This allows you to optimize the appearance of printed pages, such as articles or documents.

10. **Third-Party Integration:** CSS can be used to style third-party components, plugins, and widgets, allowing you to integrate external content seamlessly into your site's design.

</details>

In summary, CSS is a fundamental tool in web development that empowers designers and developers to create visually appealing, consistent, and responsive websites. Its advantages lie in its ability to separate presentation from content, improve maintainability, and offer flexibility in styling and layout.

---

## How to apply CSS

CSS is applied to a particular element in HTML using CSS selectors and rules. A CSS rule consists of a selector and a set of declarations enclosed in curly braces. The selector targets the HTML element(s) to which the styles should be applied, and the declarations define the specific styles to be applied.

Here's how CSS is applied to a particular element in HTML:

1. **Inline Styles:**
   You can apply styles directly to an HTML element using the `style` attribute. This is called an inline style.

    ```html
    <p style="color: blue; font-size: 16px;">This is a blue and larger text.</p>
    ```

2. **Internal Styles:**
   You can include CSS rules within the `<style>` element in the `<head>` section of an HTML document. These styles will be applied to the entire document.

    ```html
    <head>
    	<style>
    		p {
    			color: blue;
    			font-size: 16px;
    		}
    	</style>
    </head>
    <body>
    	<p>This is a blue and larger text.</p>
    </body>
    ```

3. **External Styles:**
   You can define CSS rules in an external CSS file and link it to your HTML document using the `<link>` element. This approach allows you to reuse styles across multiple HTML pages.

    **styles.css:**

    ```css
    p {
    	color: blue;
    	font-size: 16px;
    }
    ```

    **index.html:**

    ```html
    <head>
    	<link
    		rel="stylesheet"
    		href="styles.css"
    	/>
    </head>
    <body>
    	<p>This is a blue and larger text.</p>
    </body>
    ```

4. **CSS Selectors:**
   CSS selectors target specific elements for styling. You can use element selectors, class selectors, ID selectors, and more.

    **Element Selector:**

    ```css
    p {
    	color: blue;
    }
    ```

    **Class Selector:**

    ```css
    .highlight {
    	background-color: yellow;
    }
    ```

    **ID Selector:**

    ```css
    #header {
    	font-size: 24px;
    }
    ```

By using these methods, you can apply CSS styles to specific HTML elements, classes, or IDs. Remember that CSS selectors have different levels of specificity, and styles are cascaded in a specific order, which can affect how styles are applied when targeting the same elements.

<details>

<summary>More on Selectors</summary>

Class, tag, and ID selectors are essential concepts in CSS. They allow you to target specific HTML elements for styling.

## Tag Selector:

A tag selector targets all instances of a specific HTML tag. It's the most general way to apply styles to elements. For example, using a `p` tag selector will target all `<p>` (paragraph) elements in the HTML.

```css
p {
	color: blue;
}
```

In this example, all `<p>` elements will have blue text color.

## Class Selector:

A class selector targets elements with a specific class attribute. Classes are indicated using the `.` symbol in CSS. Class selectors are helpful when you want to apply the same styles to multiple elements without relying on the tag type.

HTML:

```html
<p class="highlight">This is a highlighted text.</p>
<p>This is a regular text.</p>
```

CSS:

```css
.highlight {
	background-color: yellow;
}
```

In this example, the first `<p>` element will have a yellow background color due to the `highlight` class.

## ID Selector:

An ID selector targets a specific HTML element with a unique `id` attribute. IDs are indicated using the `#` symbol in CSS. IDs are intended to be unique within the document, so an ID selector will only match one element.

HTML:

```html
<div id="header">This is the header</div>
<div>This is some content</div>
```

CSS:

```css
#header {
	font-size: 24px;
}
```

In this example, the `<div>` element with the ID `header` will have a font size of 24px.

## Differences and Considerations:

-   **Specificity:** ID selectors have the highest specificity, followed by class selectors, and then tag selectors. When multiple selectors apply to the same element, the one with the highest specificity takes precedence.

-   **Reusability:** Class selectors are more reusable than tag selectors since they can be applied to different HTML elements. IDs are intended to be unique, so they should be used sparingly and for specific cases.

-   **Styling Priority:** If there are conflicting styles (e.g., the same property defined by both a tag selector and a class selector), the most specific selector's style will be applied.

-   **Best Practices:** It's generally recommended to use class selectors for styling since they offer better separation of concerns and reusability. IDs should be reserved for unique elements with specific styling requirements.

<details>
<summary>More on advance selectors</summary>

Advanced CSS selectors allow you to target elements based on various conditions beyond simple tag, class, or ID selectors. They provide more precise control over which elements should receive specific styles. Let's explore some advanced CSS selectors with code examples:

### Attribute Selectors:

Attribute selectors target elements based on their attributes. You can match elements with specific attributes, attribute values, or attribute values containing certain patterns.

```css
/* Select all links with "example.com" in their href attribute */
a[href*="example.com"] {
	color: red;
}
```

### Descendant Selector:

Descendant selectors target elements that are descendants of a specific parent element. This selector is particularly useful for applying styles to elements within a specific container.

```css
/* Select all paragraphs inside a <div> with class "container" */
.container p {
	font-size: 16px;
}
```

### Child Selector:

Child selectors target elements that are direct children of a specific parent element. This ensures that only immediate child elements are selected.

```css
/* Select all immediate <li> children of an <ul> */
ul > li {
	list-style: square;
}
```

### Adjacent Sibling Selector:

Adjacent sibling selectors target elements that are immediately preceded by a specific sibling element. It's often used to style the first element of a certain type within a container.

```css
/* Select the first <p> element immediately after a heading */
h2 + p {
	font-weight: bold;
}
```

### General Sibling Selector:

General sibling selectors target elements that share the same parent and come after a specific sibling element, not necessarily immediately.

```css
/* Select all <p> elements that come after a heading */
h2 ~ p {
	color: gray;
}
```

### :not() Selector:

The `:not()` selector excludes elements that match a given selector from receiving styles. It's helpful when you want to apply styles to a group of elements except for specific ones.

```css
/* Select all buttons except the one with the class "special" */
button:not(.special) {
	background-color: lightgray;
}
```

### :hover Selector:

The `:hover` selector targets elements when the mouse pointer is placed over them. It's used for applying styles during hover interactions.

```css
/* Change link color on hover */
a:hover {
	color: orange;
}
```

### :nth-child() Selector:

The `:nth-child()` selector targets elements that match a specific numerical position within their parent container. This is useful for styling alternate or specific elements in a list.

```css
/* Style every even <li> element within an <ul> */
ul li:nth-child(even) {
	background-color: #f2f2f2;
}
```

### :before and :after Pseudo-elements:

The `:before` and `:after` pseudo-elements insert content before and after an element's content, respectively. They're often used for decorative elements or additional content.

```css
/* Add a checkmark before every list item */
li:before {
	content: "\2713"; /* Unicode character for checkmark */
	margin-right: 5px;
}
```

These advanced CSS selectors offer more sophisticated ways to target and style specific elements based on various conditions. By mastering these selectors, you can achieve precise and intricate styling effects for your web pages.

</details>

</details>

---

## CSS Properties

CSS properties and values define how elements should be styled. They cover a wide range of aspects, including layout, typography, color, and more. Let's dive deeper into some key CSS properties and their values based on different categories:

### Layout Properties:

1. **Display:**
    - Defines how an element should be displayed.
    - Values: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`, etc.

2. **Position:**
    - Controls the positioning of an element.
    - Values: `static`, `relative`, `absolute`, `fixed`, `sticky`.

3. **Float:**
    - Specifies whether an element should be floated to the left or right.
    - Values: `left`, `right`, `none`.

4. **Clear:**
    - Determines whether an element should clear floated elements.
    - Values: `left`, `right`, `both`, `none`.

### Box Model Properties:

1. **Width / Height:**
    - Sets the dimensions of an element's content box.
    - Values: Pixels (`px`), percentages, `auto`.

2. **Margin:**
    - Creates space outside an element's border.
    - Values: Pixels (`px`), percentages, `auto`.

3. **Padding:**

    - Adds space inside an element's border.
    - Values: Pixels (`px`), percentages.

4. **Border:**
    - Sets the border properties (width, style, color) of an element.
    - Values: Border width (`px`), border style (`solid`, `dotted`, `dashed`), color.

### Text Properties:

1. **Color:**
    - Defines the text color.
    - Values: Color names, hexadecimal (`#RRGGBB`), RGB (`rgb(255, 0, 0)`).

2. **Font-family:**
    - Specifies the font to be used for text.
    - Values: Font names, system fonts, font stacks.

3. **Font-size:**

    - Sets the size of the text.
    - Values: Pixels (`px`), ems (`em`), percentages.

4. **Font-weight:**
    - Adjusts the thickness of the text.
    - Values: `normal`, `bold`, `bolder`, `lighter`, numeric values.

### Color and Background Properties:

1. **Background-color:**
    - Sets the background color of an element.
    - Values: Color names, hexadecimal, RGB.

2. **Background-image:**
    - Sets an image as the background.
    - Values: URL to image file.

3. **Background-size:**
    - Adjusts the size of the background image.
    - Values: `cover`, `contain`, pixel values.

4. **Background-position:**
    - Specifies the position of the background image.
    - Values: Keywords (`top`, `center`, `bottom`), pixel values.

### Flexbox and Grid Properties:

1. **Flex-direction:**
    - Defines the direction of flex items within a flex container.
    - Values: `row`, `row-reverse`, `column`, `column-reverse`.

2. **Justify-content:**
    - Aligns flex items along the main axis.
    - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.

3. **Align-items:**
    - Aligns flex items along the cross axis.
    - Values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

4. **Grid-template-columns:**
    - Specifies the columns in a grid container.
    - Values: Column width values.

5. **Grid-template-rows:**
    - Specifies the rows in a grid container.
    - Values: Row height values.

These are just a few examples of CSS properties and their values based on different categories. CSS offers a wide array of properties to control nearly every aspect of element styling, allowing you to create visually appealing and responsive web designs.

