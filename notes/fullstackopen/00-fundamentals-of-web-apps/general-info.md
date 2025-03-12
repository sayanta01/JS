# - The main focus is on single-page applications implemented with React and supporting them with RESTful and GraphQL web services implemented with Node.js
# - In parts 1-4 you are expected to do at least all of the exercises that are not marked with an asterisk(*)
  # Exercises marked with an asterisk count towards your final grade, but skipping them does not prevent you from doing the compulsory exercises in the next parts
  # Parts 5-13 do not have asterisk-marked exercises since there is no similar dependency on previous parts

HTTP GET:
- Network Tab: Preserve log can also be useful
  The server and the web browser communicate with each other using the HTTP protocol
  The Network tab shows how the browser and the server communicate

Traditional web applications:
- Writing HTML amid the code is of course not smart, but for old-school PHP programmers, it was a normal practice
- In traditional web applications, the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server
  A server can be created using Java Spring , Python Flask or Ruby on Rails to name just a few examples

Document Object Model:
- The following code creates a new node, assigns it to the variable ul, and adds some child nodes to it:
# var ul = document.createElement('ul')
# data.forEach(function(note) {
#   var li = document.createElement('li')
#
#   ul.appendChild(li)
#   li.appendChild(document.createTextNode(note.content))
# })

Manipulating the document object from console:
- First, we'll get the list of notes from the page. The list is in the first ul-element of the page:
# list = document.getElementsByTagName('ul')[0]

- Then create a new li-element and add some text content to it:
# newElement = document.createElement('li')
# newElement.textContent = 'Page manipulation from console is easy'

- And add the new li-element to the list:
# list.appendChild(newElement)

- If the page is reloaded, the new note will disappear, because the changes were not pushed to the server
  The JavaScript code the browser fetches will always create the list of notes based on JSON data from the address https://studies.cs.helsinki.fi/exampleapp/data.json

Loading a page containing JavaScript - Review
![](https://fullstackopen.com/static/15a8e6a030a5d6b3d2b4b459c3f2f10f/5a190/19m.png)
- The browser executes the JavaScript code
  The code makes an HTTP GET request to the address https://studies.cs.helsinki.fi/exampleapp/data.json, which returns the notes as JSON data
- When the data has been fetched, the browser executes an event handler, which renders the notes to the page using the DOM-API

Forms and HTTP POST:
![](https://fullstackopen.com/static/07beb53097a520517c1c28ff17fc907a/5a190/26e.png)
function (e) - An object containing info about the event that just occured
<!-- const myBtn = document.getElementById("myBtn"); -->
<!-- myBtn.addEventListener("click", function (e) { -->
<!--   console.log(e); -->
<!-- }); -->

AJAX:
- The Notes page uses AJAX to fetch the notes data
  Submitting the form still uses the traditional mechanism of submitting web forms
- The application URLs reflect the old, carefree times
  JSON data is fetched from the URL https://studies.cs.helsinki.fi/exampleapp/data.json and new notes are sent to the URL https://studies.cs.helsinki.fi/exampleapp/new_note
  Nowadays URLs like these would not be considered acceptable, as they don't follow the generally acknowledged conventions of RESTful APIs

Single page app: 💡

JavaScript fatigue - Avoiding the worst of configuration hells
https://auth0.com/blog/how-to-manage-javascript-fatigue/
https://youtu.be/-A3n5N8XwpQ?si=ldab6pFo878oF3th

# Terms:
Sequence Diagram

# Vocab:
Amid - surrounded by
Depict - represent
Oblivion - the state of being unaware
