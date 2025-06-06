- The main focus is on single-page applications implemented with React
  and supporting them with RESTful and GraphQL web services implemented with Node.js

HTTP GET:
- Network Tab: Preserve log can also be useful
- The server and the web browser communicate with each other using the HTTP protocol

Traditional web applications:
- Writing HTML amid the code is of course not smart, but for old-school PHP programmers, it was a normal practice
- In traditional web applications, the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server
  A server can be created using Java Spring, Python Flask or Ruby on Rails

Event handlers and Callback functions:
- The mechanism of invoking event handlers is very common in JavaScript. Event handler functions are called callback functions
- The application code does not invoke the functions itself
  but the runtime environment the browser, invokes the function at an appropriate time when the event has occurred

Document Object Model:
- The following code creates a new node, assigns it to the variable ul, and adds some child nodes to it:
`var ul = document.createElement('ul')
 data.forEach(function(note) {
   var li = document.createElement('li')
   ul.appendChild(li)
   li.appendChild(document.createTextNode(note.content)) // note - each object in the array during the loop
 })`
- Finally, the tree branch of the ul variable is connected to its proper place in the HTML tree of the whole page:
`document.getElementById('notes').appendChild(ul)`

Manipulating the document object from console:
- Get the list of notes from the page. The list is in the first ul-element of the page:
`list = document.getElementsByTagName('ul')[0]`
- Then create a new li-element and add some text content to it:
`newElement = document.createElement('li')
 newElement.textContent = 'Page manipulation from console is easy'`
- And add the new li-element to the list:
`list.appendChild(newElement)`
- The JS code that browser fetches will always create the list of notes based on JSON data - https://studies.cs.helsinki.fi/exampleapp/data.json

Loading a page containing JavaScript - Review
![](https://fullstackopen.com/static/15a8e6a030a5d6b3d2b4b459c3f2f10f/5a190/19m.png)
- The browser executes the JavaScript code
  The code makes an HTTP GET request to the address https://studies.cs.helsinki.fi/exampleapp/data.json, which returns the notes as JSON data
- When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API

Forms and HTTP POST: 💡 Examine how adding a new note is done?
https://www.restapitutorial.com/httpstatuscodes
`function(e) // An object containing info about the event that just occured
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function (e) {
  console.log(e);
});`

AJAX: Asynchronous JavaScript and XML
https://youtu.be/-mN3VyJuCjM?si=U4D5mWgE2HG9XP43
- The Notes page uses AJAX to fetch the notes data. Submitting the form still uses the traditional mechanism of submitting web forms
- JSON data is fetched from the URL `https://studies.cs.helsinki.fi/exampleapp/data.json` and new notes are sent to the URL `https://studies.cs.helsinki.fi/exampleapp/new_note`
  Nowadays URLs like these would not be considered acceptable, as they don't follow the generally acknowledged conventions of `RESTful APIs`

Single page app: 💡 Does not reload the whole page
- SPA-style websites don't fetch all of their pages separately from the server like our sample application does
  but instead comprise only one HTML page fetched from the server, the contents of which are manipulated with JS that executes in the browser

JavaScript fatigue - Avoiding the worst of configuration hells
- JavaScript does not always work as you'd expect it to (compared to many other languages)
  And the asynchronous way its runtime environments work causes all sorts of challenges
  https://auth0.com/blog/how-to-manage-javascript-fatigue/
  https://youtu.be/-A3n5N8XwpQ?si=ldab6pFo878oF3th
- Always keep it mind that knowledge of Vanilla JavaScript will help you to become a much better developer.

# Vocab:
Amid - surrounded by
Depict - represent
Oblivion - the state of being unaware
Bears - carry the weight of
