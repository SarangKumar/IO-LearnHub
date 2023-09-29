# How to use GSAP in React

To use [GSAP](https://greensock.com/docs/) in React, you need to install the `gsap` package from [npm](https://www.npmjs.com/package/gsap). You can do this by running the following command in your terminal:

```bash
npm install gsap
```

GSAP is completely flexible; sprinkle it wherever you want. Zero dependencies.

There are many optional plugins and easing functions for achieving advanced effects easily like scrolling, morphing, animating along a motion path or FLIP animations. There's even a handy Observer for normalizing event detection across browsers/devices.

In other words you don't need to install any other package to use GSAP. It is a standalone package. 

---

How to use gsap in your react project.
```jsx
// typical import
import gsap from "gsap";
```

> [!NOTE]
> To use other features of gsap like scrolltrigger, draggable, flip, etc. (that are not general and is used to do specific task like animation on scoll and all) you have to import them separately.

How to use other plugins in your react project that is included in the gsap package.(you don't have to install any other package it is all there in gsap package)

```jsx
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
```

Now you have to register the plugins that you want to use.

```jsx
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
```