# Additional GSAP Features

Although GSAP can animate almost every CSS property, we recommend sticking to transforms and opacity when possible. Properties like filter and boxShadow are CPU-intensive for browsers to render. Animate with care and make sure to test on low-end devices.

## [Special Properties](https://greensock.com/get-started/#specialProperties)

To adjust how a tween behaves we can pass in some special properties. In fact, we've looked at one already - `duration`.

You can check them all out in [our documentation](https://greensock.com/docs/v3/GSAP/Tween), but here are some of most common ones.

| Property   | Description                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| duration   | Duration of animation (seconds) Default: 0.5                                                                     |
| delay      | Amount of delay before the animation should begin (seconds)                                                      |
| repeat     | How many times the animation should repeat.                                                                      |
| yoyo       | If true, every other repeat the tween will run in the opposite direction. (like a yoyo) Default: false           |
| stagger    | Time (in seconds) between the start of each target's animation (if multiple targets are provided)                |
| ease       | Controls the rate of change during the animation, like the motion's "personality" or feel. Default: "power1.out" |
| onComplete | A function that runs when the animation completes                                                                |

## [Repeats and alternating repeats](https://greensock.com/get-started/#repeatsAndAlternatingRepeats)

`repeat` does exactly what you might think - it allows you to play an animation more than once. `repeat` is often paired with `yoyo` in order to reverse the direction each cycle. Change the code to `yoyo:false` in the demo below to see the difference.

```js
gsap.to(".box", {
  rotation: 360,
  x: "100vw",
  xPercent: -100,
  // special properties
  duration: 2, // how long the animation lasts
  repeat: 2, // the number of repeats - this will play 3 times
  yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
});
```

## [Delays](https://greensock.com/get-started/#delays)

You can `delay` the start of an animation by a certain number of seconds. You can also use `repeatDelay` to add a delay to the start of any repeat iterations.

```js
gsap.to(".green", {
  rotation: 360,
  duration: 1,
  repeat: 1,
  repeatDelay: 1,
});

gsap.to(".purple", {
  rotation: 360,
  duration: 1,
  delay: 1, // delay the start of this animation
});
```

## [Easing](https://greensock.com/get-started/#easing)

**Easing is possibly the most important part of motion design**. A well-chosen ease will add personality and breathe life into your animation.

Take a look at the difference between no ease and a bounce ease in the demo below! The green box with no ease spins around at a consistent speed, whereas the purple box with the 'bounce' ease revs up, races along and then bounces to a stop.

```js
gsap.to(".green", { rotation: 360, duration: 2, ease: "none" });

gsap.to(".purple", { rotation: 360, duration: 2, ease: "bounce.out" });
```

```
ease: "power1.in"
// start slow and end faster, like a heavy object falling

ease: "power1.out"
// start fast and end slower, like a rolling ball slowly coming to a stop

ease: "power1.inOut"
// start slow and end slow, like a car accelerating and decelerating
```

## [Staggers](https://greensock.com/get-started/#staggers)

This is one of our favourite tricks! If a tween has multiple targets, you can easily add some delightful stagger between the start of each animation:

```js
gsap.to(".box", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.2,
  ease: "sine.out",
  force3D: true,
});

document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("click", function () {
    gsap.to(".box", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: 0.1,
      ease: "back.in",
    });
  });
});
```

## [Sequencing animations](https://greensock.com/get-started/#sequencingAnimations)

Just like we've just seen with staggers, It's common to animate more than one thing. But what if we need more control over the order and timing of those animations. Delays give us rudimentary control:

But this method of sequencing animations is a little fragile. What happens if we lengthen the duration of the first tween? The second and third tweens have no awareness of this change, so now there's an overlap - we'd have to increase all of the delays to keep them synchronized. Frustrating? Yep. That's why we created timelines!

```js
gsap.to(".green", {
  rotation: 360,
  duration: 1,
});
gsap.to(".purple", {
  rotation: 360,
  duration: 1,
  delay: 1,
});
gsap.to(".orange", {
  rotation: 360,
  duration: 1,
  delay: 2,
});
```

## [Timelines](https://greensock.com/get-started/#timelines)

Timelines are the key to creating easily adjustable, resilient sequences of animations. When you add tweens to a timeline, by default they'll play one-after-another in the order they were added.

```js
// create a timeline
let tl = gsap.timeline();

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to(".green", { x: 600, duration: 2 });
tl.to(".purple", { x: 600, duration: 1 });
tl.to(".orange", { x: 600, duration: 1 });
```
