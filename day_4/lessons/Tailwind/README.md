# Tailwind

_You might be wondering if I supposed to work with `tailwind` then why did i learn `CSS` ?_
The browser understands only `html`, `css` and `js` that's it. Doesn't matter what preprocessor, library, framework or anything you work on. Ultimately it is broken down into these 3 languages. So leaning CSS is never was and never will be a waste.
Tailwind CSS is built on top of css, by that what I mean it if you know CSS then learning and using tailwind will be cake walk. Since tailwind is more optimized in terms of user friendliness and performance.
But in case you want to do very complex stuff you have to get back to plain css.

To get further insights about tailwind you can watch [Tailwind Connect 2023](https://youtu.be/CLkxRnRQtDE) - Here Adam Wathan, Sam Selikoff, and Steve Schoger(people behind tailwind CSS) talk about the force behind creating Tailwind, future of Tailwind CSS and how it will evolve over the next few years.

## Tailwind CSS Intro

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that allows you to rapidly build user interfaces by applying pre-defined utility classes directly in your HTML markup. It's especially helpful for beginners as it simplifies the process of designing and styling web pages. Let's walk through the basics of Tailwind CSS and how to integrate it into an HTML project using a CDN (Content Delivery Network).

## What is Tailwind CSS?

Tailwind CSS is designed to make web development faster and more maintainable. It provides a set of pre-built utility classes that you can use to style your HTML elements without writing custom CSS. Here are some key features and concepts:

1. **Utility Classes:** Tailwind provides a vast collection of utility classes that cover everything from margin and padding to typography and colors. For example, you can add `class="text-blue-500"` to make text blue or `class="p-4"` to add padding.

2. **Responsive Design:** Tailwind makes it easy to create responsive layouts by using classes like `sm`, `md`, `lg`, and `xl` to target different screen sizes.

3. **Customization:** You can customize Tailwind CSS to match your project's design by modifying the configuration file.

4. **Flexbox and Grid:** Tailwind includes utility classes for creating flexible layouts using Flexbox and Grid systems.

5. **Pseudo-Classes and Variants:** You can use classes like `hover`, `focus`, `active`, and more to apply styles based on user interactions.

Now, let's integrate Tailwind CSS into an HTML project using a CDN.

## Integrating Tailwind CSS via CDN


1. **Create an HTML file**: Start by creating an HTML file (e.g., `index.html`) and open it in your preferred code editor.

2. **Add the HTML boilerplate**: Begin your HTML file with the basic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Page Title</title>
  </head>
  <body>
    <!-- Your content will go here -->
  </body>
</html>
```

3. **Add the Tailwind CSS CDN**: To integrate Tailwind CSS, you can include it via a CDN by adding the following code inside the `<head>` section of your HTML file:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

4. **Start using Tailwind classes**: With Tailwind CSS included, you can now start applying utility classes to your HTML elements. For example:

```html
<div class="bg-blue-200 p-4">
  <p class="text-blue-800">Hello, Tailwind CSS!</p>
</div>
```

In this example, we've added a blue background, padding, and text color to a `<div>` and a `<p>` element.

5. **Preview your webpage**: Save your HTML file and open it in a web browser to see the applied styles.

That's it! You've successfully integrated Tailwind CSS into your HTML project using a CDN and applied some basic styles. As you become more familiar with Tailwind, you can explore its documentation to discover more utility classes and customization options for your web development projects.


<details>
<summary>
Know more about Tailwind CSS integration
</summary>

<br />
Tailwind CSS can be used in two main ways: via CDN (Content Delivery Network) and through npm (Node Package Manager). Each approach has its advantages and considerations:

Here's a concise comparison between using Tailwind CSS via CDN and using npm :

| Aspect                      | CDN                            | npm                               |
| --------------------------- | ------------------------------ | --------------------------------- |
| Setup Speed                 | Quick and Immediate            | Requires Setup and Configuration  |
| Customization               | Limited customization options  | Highly customizable               |
| Build Process               | No build process               | Requires a build process          |
| Package Ecosystem           | Not applicable                 | Access to npm package ecosystem   |
| Full Control                | Limited control                | Complete control and flexibility  |
| Suitable for Small Projects | Yes                            | Yes, but best for larger projects |
| Team Collaboration          | Simple for individual projects | Standardized for team projects    |

In summary, the choice between using Tailwind CSS via CDN or npm depends on the specific requirements of your project. The CDN is great for quick start and simplicity, while npm offers more control, customization, and scalability for larger and more complex web applications.

[Here](https://tailwindcss.com/docs/installation) is how you you will be adding tailwind to different stacks

</details>
### My views

[Tailwind CSS](https://tailwindcss.com/) 's docs are very well written and easy to understand. I would recommend you to go through it once. It will help you to understand the framework better. It was the first doc that I read. Of course you would not able to understand everything on the very first day but with time you will get a lot things.

You may practise tailwind with [Tailwind Play](https://play.tailwindcss.com/)
