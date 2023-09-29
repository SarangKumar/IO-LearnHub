# More about GSAP

## Anatomy of GSAP code

![Bare minimum](https://greensock.com/uploads/pages_media/0_tween.png?_cb=1658321154)

We've got a method, a target and a vars object which contains information about the animation

### The method(s)

There are four types of tweens:

`gsap.to()` - This is the most common type of tween. A .to() tween will start at the element's current state and animate "to" the values defined in the tween.

`gsap.from()` - Like a backwards .to() where it animates "from" the values defined in the tween and ends at the element's current state.

`gsap.fromTo()` - You define both the starting and ending values.

`gsap.set()` - Immediately sets properties (no animation). It's essentially a zero-duration .to() tween which can be reverted.

> [!NOTE]
> I have created a component [Animation1](./src/components/Animation1.jsx) that illustrates this concept.

### The target (or targets)

Next up we have to tell GSAP what we want to animate. Under the hood GSAP uses document.querySelectorAll(), so for HTML or SVG targets we can use selector text like **.class** and **#id**. Or you can pass in a variable or even an Array.

```jsx
// use a class or ID
gsap.to(".box", { x: 200 });

// a complex CSS selector
gsap.to("section > .box", { x: 200 });

// a variable
let box = document.querySelector(".box");
gsap.to(box, { x: 200 });

// or even an Array of elements
let square = document.querySelector(".square");
let circle = document.querySelector(".circle");

gsap.to([square, circle], { x: 200 });
```

### The variables

The vars object contains all the information about the animation. This can be arbitrary properties you want to animate, or special properties that influence the behavior of the animation - like `duration`, `onComplete` or `repeat`.

```jsx
gsap.to(target, {
  // this is the vars object
  // it contains properties to animate
  x: 200,
  rotation: 360,
  // and special properties
  duration: 2,
});
```

Here's a handy chart with some of the most commonly used transform values.

| GSAP                       | CSS                          | Explanation                                                         |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| x: 100                     | transform: translateX(100px) | Move horizontally (px or SVG units)                                 |
| y: 100                     | transform: translateY(100px) | Move vertically (px or SVG units)                                   |
| xPercent: -50              | transform: translateX(-50%)  | Move horizontally (percentage of element's width)                   |
| yPercent: -50              | transform: translateY(-50%)  | Move vertically (percentage of element's height)                    |
| rotation: 360              | transform: rotate(360deg)    | Rotate (degrees)                                                    |
| scale: 2                   | transform: scale(2, 2)       | Increase or decrease size                                           |
| transformOrigin: "0% 100%" | transform-origin: 0% 100%;   | The center of translation, this will rotate around the bottom left. |

<details>
<summary>View all the shorthand transforms...</summary>

| Syntax         | Analog CSS                 |
| -------------- | -------------------------- |
| rotationX: 360 | transform: rotateX(360deg) |
| rotationY: 360 | transform: rotateY(360deg) |
| skewX: 45      | transform: skewX(45deg)    |
| skewY: 45      | transform: skewY(45deg)    |
| scaleX: 2      | transform: scaleX(2)       |
| scaleY: 2      | transform: scaleY(2)       |

</details>

> When possible, use transforms for animation rather than layout properties like "top", "left" or "margin". You'll get smoother animations!

