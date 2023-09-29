# Show me the code

GSAP s [get started page](https://greensock.com/get-started/) is a good place to start. It has a lot of examples and code snippets that you can use to get started with GSAP.

> [!IMPORTANT]
> The docs that I am linking will have related to js but we will be working with the react version of GSAP. But the process is same for both. So, don't worry about that.

---

## Triggering animation on mount - useLayoutEffect() Triggering animation on mount - useLayoutEffect()

The `useLayoutEffect()` hook runs immediately AFTER React has performed all DOM mutations. It's a very handy hook for animation because it ensures that your elements are rendered and ready to be animated. Here's the general structure:

```jsx
const comp = useRef(); // create a ref for the root level element (we'll use it later)

useLayoutEffect(() => {
  
  // -- ANIMATION CODE HERE --
  
  return () => { 
    // cleanup code (optional)
  }
  
}, []); // <- empty dependency Array so it doesn't re-run on every render!
```

> Don't forget that empty dependency Array! If you omit that, React will re-run the useLayoutEffect() on every render.

---

## Targeting elements with Refs Targeting elements with Refs

In order to animate, we need to tell GSAP which elements we want to target. The React way to access DOM nodes is by using Refs. Refs are a safe, reliable reference to a particular DOM node.

```jsx
const boxRef = useRef();

useLayoutEffect(() => {
  // Refs allow you to access DOM nodes
  console.log(boxRef) // { current: div.box }
  // then we can animate them like so...
  gsap.to(boxRef.current, {
    rotation: "+=360"
  });
});

return (
  <div className="App">
    <div className="box" ref={boxRef}>Hello</div>
  </div>
);
```