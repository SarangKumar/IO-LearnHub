# HTML Basics

HTML (Hypertext Markup Language) is the standard language used to create web pages. It provides structure and content to web documents. HTML uses tags to define elements, which are the building blocks of a web page.

Understanding and utilizing these HTML tags effectively is crucial for creating well-structured and interactive web pages. As you progress in your learning, you'll find that combining these tags allows you to craft dynamic and engaging user experiences. Special attention to form-related tags is vital for collecting and processing user input, making them a key aspect of web development.

## Basic Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

- `<!DOCTYPE html>`: Declaration of the document type.
- `<html>`: The root element that encloses all content.
- `<head>`: Contains meta-information about the document.
- `<title>`: Sets the title of the browser tab.
- `<body>`: Contains the visible content of the web page.

## Text Formatting Tags:

### `<strong>` and `<em>` Tags

The `<strong>` and `<em>` tags are used to give special emphasis to text.

Example:
```html
<p>This is <strong>strong</strong> text and <em>emphasized</em> text.</p>
```

## Heading Tags:

### `<h1>` to `<h6>` Tags

These tags are used for headings, with `<h1>` being the highest level and `<h6>` being the lowest.

Example:
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

## Links and Anchors:

### `<a>` Tag

The `<a>` tag is used to create hyperlinks.

Example:
```html
<a href="https://www.example.com">Visit Example</a>
```

## Lists:

### Unordered List (`<ul>`) and List Item (`<li>`) Tags

The `<ul>` tag is used for creating unordered lists, and the `<li>` tag represents list items within those lists.

Example:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### Ordered List (`<ol>`) and List Item (`<li>`) Tags

The `<ol>` tag is used for creating ordered lists.

Example:
```html
<ol>
    <li>First</li>
    <li>Second</li>
</ol>
```


### `<button>` Tag

The `<button>` tag creates buttons that users can interact with, such as submitting a form.

Example:
```html
<form>
    <!-- form inputs here -->
    <button type="submit">Submit</button>
</form>
```

## Divisions:

### `<div>` Tag

The `<div>` tag is a generic container used to group and style elements together.

Example:
```html
<div class="container">
    <p>This is a division.</p>
</div>
```

## Comments:

### Comment Tags

Comments in HTML are used to annotate code for better understanding.

Example:
```html
<!-- This is a comment -->
```

Certainly! Let's dive into the details of using form-related HTML tags, including the `<form>` tag, `<label>` tag, `<input>` tag, `<textarea>` tag, and different types of input fields.

## Form Tags

The `<form>` tag is used to create a form that collects user input. The `action` attribute specifies where the form data should be sent, and the `method` attribute defines how the data is sent (usually "GET" or "POST").

Example:
```html
<form action="submit_form.php" method="POST">
    <!-- Form fields go here -->
    <button type="submit">Submit</button>
</form>
```

### Label and Input Fields:

The `<label>` tag provides a label for the input field. The `for` attribute in the `<label>` tag should match the `id` attribute of the corresponding `<input>` element. This association improves accessibility.

Example:
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>
```

### Input Types

#### Text Input:

The most basic input type is text. Users can enter any text into this field.

Example:
```html
<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" required>
```

#### Password Input:

The password input type hides the entered characters, commonly used for passwords.

Example:
```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" required>
```

#### Email Input:

The email input type ensures valid email format.

Example:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

#### Number Input:

The number input type allows users to enter numeric values.

Example:
```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="0" max="150">
```

#### Checkbox Input:

Checkboxes allow users to select multiple options.

Example:
```html
<label for="options">Select options:</label>
<input type="checkbox" id="option1" name="options" value="option1">
<label for="option1">Option 1</label>
<input type="checkbox" id="option2" name="options" value="option2">
<label for="option2">Option 2</label>
```

#### Radio Button Input:

Radio buttons allow users to select a single option from a group.

Example:
```html
<label>Gender:</label>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

#### Textarea:

The `<textarea>` tag creates a multi-line text input area.

Example:
```html
<label for="comments">Comments:</label>
<textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```

#### Select Dropdown:

The `<select>` tag creates a dropdown menu for selecting options.

Example:
```html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="usa">United States</option>
    <option value="canada">Canada</option>
    <option value="uk">United Kingdom</option>
</select>
```


---
## Media Tags:

The `<img>`, `<video>` and `<audio>` tags are essential for embedding multimedia content on your web pages. By providing multiple sources with different formats, you ensure a wider range of browser compatibility. Additionally, using the `controls` attribute offers users an intuitive way to interact with and enjoy video and audio content.
### Image Tag

The `<img>` tag is used to embed images on a webpage.

Example:
```html
<img src="image.jpg" alt="Description of the image">
```

### Video Tag:

The `<video>` tag is used to embed video content on a webpage. You can include multiple source elements within the `<video>` tag to provide different formats of the video, ensuring compatibility across various browsers.

Example:
```html
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

- `controls`: Adds video playback controls (play, pause, volume, etc.).
- `width` and `height`: Set the dimensions of the video player.
- `<source>`: Defines video sources with different formats (`src` attribute) and MIME types (`type` attribute).

### Audio Tag:

The `<audio>` tag is used to embed audio content in a similar manner to the `<video>` tag.

Example:
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>
```

- `controls`: Adds audio playback controls.
- `<source>`: Defines audio sources with different formats and MIME types.

### Using Alternative Content:

In both the `<video>` and `<audio>` tags, it's important to include alternative content that will be displayed if the browser does not support the specified format.

Example:
```html
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```


>In this example, if the browser doesn't support the video tag or the provided formats, the message "Your browser does not support the video tag." will be displayed.

---

## Meta Tag Examples:

Meta tags are snippets of HTML code that provide metadata about a web page. These tags don't affect the appearance of the page but offer information to browsers, search engines, and other web services. Meta tags play a significant role in search engine optimization (SEO), social sharing, and browser behavior. Let's explore some common meta tags along with examples:

### Importance of Meta Tags:

1. **SEO:** Meta tags, particularly the meta description, influence how your page appears in search engine results. Relevant descriptions can attract users to click on your link.

2. **Social Sharing:** Open Graph and Twitter Card meta tags enhance the appearance of your content when shared on social media platforms, leading to higher engagement.

3. **Browser Behavior:** The charset and viewport meta tags affect how browsers render and display your content.

4. **Accessibility:** Properly crafted meta tags improve accessibility for screen readers and other assistive technologies.

5. **Metadata Organization:** Meta tags provide a structured way to include important information about your page within the HTML document itself.

In summary, meta tags provide essential information that affects how your content is displayed, indexed, and shared on the web. Utilizing them effectively can improve the user experience, visibility, and accessibility of your web pages.

### `<meta charset>`

The `<meta charset>` tag specifies the character encoding of the HTML document.

```html
<meta charset="UTF-8">
```

### `<meta name="viewport">`

The `<meta name="viewport">` tag adjusts the way a page is displayed on different devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### `<meta name="description">`

The `<meta name="description">` tag provides a brief description of the content of the page, which search engines often use in search results.

```html
<meta name="description" content="Explore our collection of delicious recipes...">
```

### `<meta name="keywords">`

The `<meta name="keywords">` tag used to specify relevant keywords for the page's content, although it's less influential for SEO today.

```html
<meta name="keywords" content="cooking, recipes, food, cuisine">
```

### `<meta name="author">`

The `<meta name="author">` tag indicates the author of the page's content.

```html
<meta name="author" content="John Doe">
```

### `<meta name="robots">`

The `<meta name="robots">` tag controls how search engines index and display your page. Common values are `index`, `noindex`, `follow`, and `nofollow`.

```html
<meta name="robots" content="index, follow">
```

### Open Graph (OG) Meta Tags:

Open Graph meta tags are used for social sharing on platforms like Facebook, Twitter, and LinkedIn.

```html
<meta property="og:title" content="Article Title">
<meta property="og:description" content="A brief overview of the article...">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/article">
```

### Twitter Card Meta Tags:

These meta tags help control how your content appears when shared on Twitter.

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@example">
<meta name="twitter:title" content="Article Title">
<meta name="twitter:description" content="A brief overview of the article...">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

