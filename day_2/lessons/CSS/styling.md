## CSS Properties

CSS properties and values define how elements should be styled. They cover a wide range of aspects, including layout, typography, color, and more. Let's dive deeper into some key CSS properties and their values based on different categories:

### Layout Properties:

1. **Display:**

    - Defines how an element should be displayed.
    - Values: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`, etc.

2. **Position:**

    - Controls the positioning of an element.
    - Values: `static`, `relative`, `absolute`, `fixed`, `sticky`.
    - You may refer to this [dev blog](https://dev.to/surajondev/css-position-property-explained-3eg7) to know more.

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

4. **Border:** - Sets the border properties (width, style, color) of an element. - Values: Border width (`px`), border style (`solid`, `dotted`, `dashed`), color.
   ![Box Model](https://media.geeksforgeeks.org/wp-content/uploads/20220814185808/borderboxboxmodel.png)

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

Now that we have seen a few classes that can style our elements, let's see how we can use them to create a layout. There are two ways to create a layout in CSS. One is by using flexbox and the other is by using grid. Let's see how we can use them to create a layout.

![Flex](https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/03/uKflTr3s.png?resize=1024%2C509&ssl=1)

1. **Flex-direction:**

    - Defines the direction of flex items within a flex container.
    - Values: `row`, `row-reverse`, `column`, `column-reverse`.

2. **Justify-content:**

    - Aligns flex items along the main axis.
    - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.

3. **Align-items:**
    - Aligns flex items along the cross axis.
    - Values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

A Visual Reference of CSS Flexbox. by [eludadev](https://www.reddit.com/user/eludadev/)
![A Visual Reference of CSS Flexbox.](https://preview.redd.it/rofzm44oka091.png?width=1080&crop=smart&auto=webp&s=798a921013d289735ab86d677e1853873a6a72d7)

You may refer to [this](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) really cool website by css tricks to know more about flexbox.

4. **Grid-template-columns:**

    - Specifies the columns in a grid container.
    - Values: Column width values.

5. **Grid-template-rows:**
    - Specifies the rows in a grid container.
    - Values: Row height values.

Visualising css grid is really tough just by imagining it. But [Slaying The Dragon](https://www.youtube.com/watch?v=EiNiSFIPIQE) has covered this topic in a really cool way. You may refer to it to know more about css grid.

Certainly! Here's information about CSS animations using the same schema as the one you provided:

### CSS Animations:

![CSS animations](https://uploads.sitepoint.com/wp-content/uploads/2017/01/1483422029image03.gif)

1. **Animation:**

-   Allows you to create smooth and gradual transitions between CSS styles.
-   Values: Animation name, duration, timing function, delay, iteration count, direction, fill mode, play state.

2. **Keyframes:**

-   Specifies the animation sequence at various points in time.
-   Values: Name of the animation, percentages or "from" and "to" keywords.

3. **@keyframes:**

-   Defines the animation sequence using keyframes.
-   Values: Animation name, keyframe selectors (0%, 25%, 50%, 75%, 100%), properties and values at each keyframe.

4. **animation-name:**

-   Specifies the name of the animation, which corresponds to the @keyframes rule.
-   Values: Animation name (string).

5. **animation-duration:**

-   Sets the time it takes for an animation to complete one cycle.
-   Values: Time (s or ms).

6. **animation-timing-function:**

-   Defines how the intermediate values used during an animation are calculated.
-   Values: Timing functions (ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier, steps).

7. **animation-delay:**

-   Specifies the delay before the animation starts.
-   Values: Time (s or ms).

8. **animation-iteration-count:**

-   Determines how many times an animation should run.
-   Values: Number, "infinite".

9. **animation-direction:**

-   Specifies whether the animation should play forward, backward, or alternate.
-   Values: "normal", "reverse", "alternate", "alternate-reverse".

10. **animation-fill-mode:**

-   Sets the values for the target element when the animation is not running.
-   Values: "none", "forwards", "backwards", "both".

11. **animation-play-state:**

-   Controls whether an animation is running or paused.
-   Values: "running", "paused".

CSS animations provide a way to add dynamic and engaging effects to web elements. They allow you to create smooth transitions, effects, and animations in web pages, enhancing the user experience.



---

These are just a few examples of CSS properties and their values based on different categories. CSS offers a wide array of properties to control nearly every aspect of element styling, allowing you to create visually appealing and responsive web designs.
