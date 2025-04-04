#
Components: UI building blocks:
- React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app

Defining a component:
- Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript
- This worked great when interaction was a nice-to-have on the web
- Now it is expected for many sites and all apps
  React puts interactivity first while still using the same technology
! A React component is a JavaScript function that you can sprinkle with markup

Step 1: Export the component 
- The export default prefix is a standard JavaScript syntax (not specific to React)
  It lets you mark the main function in a file so that you can later import it from other files

Step 2: Define the function
- With function Profile() { } you define a JavaScript function with the name Profile

Step 3: Add markup
- The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood!

Using a component:
- You can nest it inside other components 

Nesting and organizing components:
- Components are regular JavaScript functions, so you can keep multiple components in the same file
  This is convenient when components are relatively small or tightly related to each other
  If this file gets crowded, you can always move Component to a separate file
- This is part of the magic of React: you can define a component once
  & then use it in as many places and as many times as you like
# export default function Gallery() {
#   // 🔴 Never define a component inside another component!
#   function Profile() {
#     // ...
#   }
#   // ...
# }

# export default function Gallery() {
#   // ...
# }
#
# // ✅ Declare components at the top level
# function Profile() {
#   // ...
# }
- When a child component needs some data from a parent, pass it by props instead of nesting definitions
! Components all the way down

# Vocab
Abbreviated - shortened

# ------------------------------------------------------------------------------

Importing and Exporting Components
- The root component file?

You can move a component in three steps:
1. Make a new JS file to put the components in
2. Export your function component from that file (using either default or named exports)
3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports)

Default vs named exports:
- A file can only have one default export, but it can have numerous named exports!

How you export your component dictates how you must import it:
- When you write a default import, you can put any name you want after import
- With named imports, the name has to match on both sides. That’s why they are called named imports!
- Always give meaningful names to your component functions and the files that contain them

Using a mix of default and named exports:
# Gallery.js
# - Exports the Profile component as a named export called Profile
# - Exports the Gallery component as a default export
# App.js
# - Imports Profile as a named import called Profile from Gallery.js
# - Imports Gallery as a default import from Gallery.js
# - Exports the root App component as a default export
