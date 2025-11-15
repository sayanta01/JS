# Odin Project
- You can also use relational selectors (firstElementChild or lastElementChild)
  So you can identify certain node based on its relationships to the nodes around it
- When your HTML code is parsed by a web browser, it is converted to the DOM
  One of the primary differences is that these nodes are JS objects that have many properties and methods attached to them
  These properties and methods are the primary tools we are going to use to manipulate our webpage
- Element creation does NOT put your new element into the DOM, it creates it in memory
  So that you can manipulate the element (by adding styles, classes, ids, text, etc) before placing it on the page
- Keep in mind that the JavaScript does not change your HTML file, but the DOM
  your HTML file will look the same, JavaScript changes what the browser renders

## The basic methods for finding, altering, adding, and removing DOM nodes
<!-- - querySelector("#id") - CSS selectors .class, div, [attr] -->
<!-- - getElementsBy* - Limited to tag, class or id -->
<!-- - Use only for auto-updating live collections -->

div.textContent = "Hola"; // Sets and updates text
div.id = "myId";
div.classList.add("box"); // Best way to add class (without overwriting) - remove, toggle
div.style.color = "blue"; // Use inline style only for dynamic styles that change at runtime
<!-- - el.getAttribute("data-user") -->
<!-- - el.setAttribute("data-role", "admin") - Overwrites existing values, so use carefully -->

# Lifecycle of DOM Manipulation
Create element (document.createElement("div"))
    ↓
Set content, properties, or attributes (.textContent, .style, .className)
Optionally create and append children (ul > li items)
    ↓
Add event listeners (el.addEventListener("click", () => {}) / el.removeEventListener("click", {}))
    ↓
Select element to attach to (document.body or document.querySelector("#container"))
    ↓
Attach to the DOM (container.append(div)) - prepend(), before(), after(), append()
    ↓
Element appears on the page (DOM is updated)

<!-- const parentDiv = document.createElement("div"); -->
<!-- parentDiv.classList.add("parent"); -->
<!-- <div class="parent"></div> -->
<!---->
<!-- const childDiv = document.createElement("div"); -->
<!-- childDiv.classList.add("child"); -->
<!-- childDiv.textContent = "i'm inside parent div"; -->
<!-- <div class="child">i'm inside parent div</div> -->
<!---->
<!-- parentDiv.append(childDiv); // Append child inside parent -->
<!-- document.body.append(parentDiv); // Append parent to body -->
<!-- <div class="parent"> -->
<!--   <div class="child">"im inside parent div"</div> -->
<!-- </div> -->

# Terms
Node: Everything in the DOM: elements, text, comments, attributes even the DOCTYPE declaration
`document.querySelectorAll("p")` // All matching elements (NodeList)
Element: Only actual HTML tags: <html> <head> <title> <body> <h1> <div> <p>
`document.querySelector("h1")` // First matching element

# Vocab
Traversal: The act of going from one place to another

--------------------------------------------------------------------------------

Event Handling:
- Asynchronous DOM Updates
- MutationObserver & IntersectionObserver
https://youtu.be/Mi4EF9K87aM?si=YVidfFERBjnAWyWp

Event Propagation (Bubbling & Capturing): Trickling Down, Bubbling Up
https://youtu.be/aVSf0b1jVKk?si=n2ynQYLnPjfFYlVZ
- Mechanism that dictates how events travel through the Document Object Model (DOM)
<!-- document.querySelector("#grandParent").addEventListener("click", () => { -->
<!--   console.log("Grandparent Clicked!"); -->
<!-- }, true); -->
<!---->
<!-- document.querySelector("#parent").addEventListener("click", () => { -->
<!--   console.log("Parent Clicked!"); -->
<!-- }, false ); // default is Bubbling up -->
<!---->
<!-- document.querySelector("#child").addEventListener("click", (e) => { -->
<!--   console.log("Child Clicked!"); -->
<!--   e.stopPropagation(); -->
<!-- }, false); -->

Event Delegation way to handle events more efficiently in JavaScript
https://youtu.be/3KJI1WZGDrg?si=RUiB_nLPozfzGx8y

Debouncing: lodash.debounce
https://youtu.be/tJhA0DrH5co?si=AV5BekUScA3UYEzu
What - Ignore operations that happen too close together during a specific interval, and combine them into a single invocation"
Why  - To avoid too many calls (e.g., typing, resizing, scrolling)

Debouncing vs Throttling:
https://youtu.be/tJhA0DrH5co?si=Eb6pLcHv0X4caI0N
- Limiting the rate of function calls

Throttling: originally meant slowing down the rate of fluid flow using an obstruction
https://youtu.be/81NGEXAaa3Y?si=WcEVt8xfuhcs9CU_
