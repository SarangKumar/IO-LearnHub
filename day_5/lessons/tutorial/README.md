# Getting started with React

Welcome to the world of React! If you're a beginner with a basic understanding of HTML, CSS, and JavaScript, you're in the right place. React is a popular JavaScript library for building user interfaces. In this guide, we'll take you through the basics of React step by step with simple explanations and code examples.

## Introduction to React

React is a library for building user interfaces. It helps you create interactive and dynamic web applications by breaking them down into reusable components. React is widely used in the industry and has a vibrant community, making it a great choice for web development.

## How React Differs from HTML, CSS, and JavaScript

React introduces a new way of thinking about building web applications compared to traditional HTML, CSS, and JavaScript:

- **Component-Based**: Instead of writing one large HTML file, you create small, reusable components. Each component encapsulates a part of your UI, making it easier to manage and maintain.

- **Virtual DOM**: React uses a virtual representation of the DOM, which is more efficient and allows for faster updates compared to directly manipulating the actual DOM.

- **Data-Driven**: React is driven by data. You can create dynamic UIs by updating data, and React will automatically update the UI to match the data changes.

- **Declarative**: With React, you describe _what_ you want the UI to look like, and React takes care of _how_ to make it look that way.

Now, let's get started with a simple example.

>

## Setting Up a React Project with Vite

[Vite](https://vitejs.dev/) is a fast build tool and development server for modern web development. We'll use it to set up our React project. If you haven't already, make sure you have [Node.js](https://nodejs.org/) installed on your computer.

To create a new React project with Vite:

- Open your terminal and run the following commands:

```bash
# installing vite with npm
npm create vite@latest
```

- When prompted give a project name, I am giving `starter-vite` & select `react` as the framework. Select `Javascript` as the variant.

- Now you should have a new directory with the name of your project. Open it in your code editor and run the following command in your terminal:

```bash
  cd starter-vite
  npm install
  npm run dev
```

- Finally in the browser go to your browser and search `localhost:5173` or whatever Local URL is shown in your terminal.

You should see a page that looks like this:

![Starter page](/day_5/lessons/tutorial/vite-start.png)


## What is created

```bash
├───node_modules (where all the folders and files that are required for the project to run are stored)
│   ├───.bin
│   └───.vite
│      └───deps
│       └───...
├───public (where the index.html file is stored)
├───src (where all the code is stored)
│    └───assets
├───.eslintrc.js (helps you write better code by giving errors)
├───index.html (entry point of the code where react is injected)
├───package-lock.json (where the dependencies and their dependencies are stored)
├───package.json (where all the dependencies are stored)
├───.gitignore (files that are ignored by git)
├───README.md (description of the project can be written here)
└───vite.config.js (where the configuration of vite is stored)
```


## Creating Your First React Component

Now that you have your project set up, let's create your first React component. Open the `src/App.js` file in your project directory and replace its content with the following code:

```javascript
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is your first React component.</p>
    </div>
  );
}

export default App;
```

In this code:

- We import React, which is necessary for writing React components.

- We define a function called `App`, which is our first React component.

- Inside the `App` component, we return JSX, a syntax extension for JavaScript that looks like HTML but is used to describe the structure of our component.

## Rendering Your React Component

Now that you have defined your `App` component, you need to render it in your application. Open the `src/index.js` file and modify it as follows:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

In this code:

- We import `ReactDOM` to render our React component into the HTML document.

- We import our `App` component.

- We use `ReactDOM.render()` to render the `App` component into the element with the id `root` in your HTML file.

## Running Your React Application

To start your React application, run the following command in your project directory:

```bash
npm run dev
```

This will start the development server, and you can view your React app in your browser by navigating to `http://localhost:3000`.

Congratulations! You've created and rendered your first React component. This is just the beginning of your journey with React. As you continue to learn, you'll discover how to build more complex and interactive user interfaces.

Feel free to explore React's documentation and practice building more components to solidify your understanding. Happy coding! 🚀
