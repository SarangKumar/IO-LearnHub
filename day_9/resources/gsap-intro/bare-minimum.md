# How to get started

In this article I want to show you how to get started with GSAP in React. I will be trying to explain you what is written in the docs in the simplest way possible. So, let's get started.

Why don't we code as well.

### Step 0: Create a react vite app and integrate tailwindcss

Refer to [vite](https://vitejs.dev/guide/) and [tailwindcss](https://tailwindcss.com/docs/guides/vite) docs for this.

And remove unnecessary files and code.

- Remove `public` folder
- Remove `asssets` folder which is under `src`
- Don't touch `main.jsx`
- Remove `App.css` since we will be using tailwind and having just `index.css` is fine
- Clear the content of `App.jsx` and hit `rafce` command. This will create a functional component with the name `App` and also export this function so that you can use it anywhere in the project.
- We will be making separate components for each part of the article. So, create a folder called `components` and create a file called `Animation0.jsx` inside it. This will be our first component.

### Step 1: Install GSAP by running the following command in your terminal

```bash
npm i gsap
```

### Step 2: Create a component and import it in your App.js

I am creating a component called `Animation0.jsx` and am importing it in my `App.js` file.

Content of jsx before adding gsap

```jsx
const Animation0 = () => {
  return (
    <>
      <p className="text-sm">Animation0</p>
      <h1 className="heading mt-5 font-semibold text-xl text-teal-500">
        Animation0
      </h1>
    </>
  );
};

export default Animation0;
```

Content of gsap after adding GSAP

```jsx
import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const Animation0 = () => {
  useLayoutEffect(() => {
    gsap.to(".heading", { y: -20 });
  }, []);
  return (
    <>
      <p className="text-sm">Animation0</p>
      <h1 className="heading mt-5 font-semibold text-xl text-teal-500">
        Animation0
      </h1>
    </>
  );
};

export default Animation0;
```

**Let's see what is there**

- First I have added a hook called `useLayoutEffect` which is a react hook. This hook runs immediately AFTER React has performed all DOM mutations. It's a very handy hook for animation because it ensures that your elements are rendered and ready to be animated.

<details>
<summary>About the hook</summary>

```jsx
useLayoutEffect(() => {
  
  // -- ANIMATION CODE HERE --
  
  return () => { 
    // cleanup code (optional)
  }
  
}, []); // <- empty dependency Array so it doesn't re-run on every render!
```

This hooks takes 2 parameter. First being a callback, the function that is supposed to run and the second being a dependency array. If you don't know about dependency array, it is an array that contains the dependencies of the function. If any of the dependencies change, the function will run again. If you don't want the function to run again, you can pass an empty array.

> [!NOTE]
>  Don't forget that empty dependency Array! If you omit that, React will re-run the useLayoutEffect() on every render.

</details>

- Then I have imported gsap from gsap. This is the gsap that we installed in the previous step.

- Then I have used the `to` method of gsap to animate the heading. The `to` method takes 2 parameters. First being the target element and the second being the object containing the properties that you want to animate. In this case, I am animating the heading by moving it 20px up.

#### And that's it. You have successfully animated your first element using GSAP in React.


