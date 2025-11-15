const container = document.createElement("div");
container.classList.add("content");
container.textContent = "Wake up, Neo!";
document.body.appendChild(container);

const h1 = document.createElement("h1");
h1.textContent = "Hey I'm blue!";
h1.style.color = "blue";
container.append(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
container.append(p);

// Event Handling --------------------------------------------------------------

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello Wxrld");
// });

const btn = document.querySelector("#btn");

function alertFunction() {
  alert("YAY! You did it!");
}

btn.addEventListener("click", alertFunction);

// Event Object - Information about the event’s target element
// btn.addEventListener("click", function(e) {
//   console.log(e);
//   // e.target.style.background = "blue";
// });

// Use querySelectorAll - Select all matching elements and add event listener to each
// const button = document.querySelectorAll("button");
// button.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

// -----------------------------------------------------------------------------

// <!doctype html>
// <html lang="en">
//
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>JS</title>
//   <script src="try.js" defer></script>
//   <!-- Load the JS after the HTML is fully built -->
//   <!-- Don't clutter HTML with JavaScript -->
// </head>
//
// <body>
//   <!-- <h1>Namaste JavaScript</h1> -->
//   <!-- <button onclick="alert(this)">Click Me</button> -->
//   <!-- <button onclick="openImage()">Click Me</button> -->
//
//   <!-- <div id="container"></div> -->
//
//   <!-- <button id="btn">Click Me</button> -->
//
//   <!-- <div id="container_2"> -->
//   <!--   <button id="one">Click Me</button> -->
//   <!--   <button id="two">Click Me</button> -->
//   <!--   <button id="three">Click Me</button> -->
//   <!-- </div> -->
// </body>
//
// </html>
