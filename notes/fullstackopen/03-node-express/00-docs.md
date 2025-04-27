# https://youtu.be/RkD6S-3AGWQ?si=86JkgKwg6pQ2P89a - 27:00
- Node.js is designed for I/O-intensive tasks, not CPU-intensive ones
  can't do CPU-intensive task, because when you block event loop, all code will be stuck/slow

All lanuage have these 3 things:
- sequence  - the logical sequence of event
- selection - the conditional operator you can use to divert the code flow
- iteration - how many types of loops & methods for working with array

What are the 20% of things done in the backend that are used 80% of the time?
- Confusing for...in and for...of Loops


https://endler.dev/2025/best-programmers/#know-your-tools-really-well
- its history: who created it? Why? To solve which problem?
- its present: who maintains it? Where do they work? On what?
- its limitations: when is the tool not a good fit? When does it break?
- its ecosystem: what libraries exist? Who uses it? What plugins?

- lodash library is utility library
  list types of libraries ?

Resources:
https://nodeschool.io/
https://dhanushnehru.github.io/Ultimate-NodeJs-Resources/

Namespace: folder for names that groups variables, functions, classes together to avoid name conflicts
EventEmitter === EventListener - Node.js equivalent features like the Browser
- Just event & callback 💡
- Almost everything important is event-based
`const { EventEmitter } = require("events"); // EventEmitter is Class
const emitter = new EventEmitter();
// listen to the event
emitter.on("lunch", () => {
  console.log("yum"); // callback
});
// trigger the event
emitter.emit("lunch");`


# Docs -------------------------------------------------------------------------
- A Node.js app runs in a single process, without creating a new thread for every request
  Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking
  https://nodejs.org/api/ - standard library
- When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem
  instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back
- Whenever a new request is received, the request event is called, providing two objects:
  a request (an http.IncomingMessage object) and a response (an http.ServerResponse object)
- Those 2 objects are essential to handle the HTTP call
  The first provides the request details
  The second is used to return data to the caller


Differences between Node.js and the Browse:
- In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies
  Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser
- And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality
- Another big difference is that in Node.js you control the environment you know which version of Node.js you will run the application on
- Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient


The V8 JavaScript Engine that powers Google Chrome:
- It's the thing that takes our JavaScript and executes it inside the browser
- it parses and executes JavaScript code. The DOM, and the other Web Platform APIs
  (they all make up the runtime environment) are provided by the browser
- The cool thing is that the JavaScript engine is independent of the browser in which it's hosted
  This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js
- V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem

Compilation:
- JavaScript is generally considered an interpreted language
  but modern JavaScript engines no longer just interpret JavaScript, they compile it
What gets compiled v interpreted?
- Rarely used code - Interpreted
- Frequently run code - Compiled with JIT to speed up


NPM:
--save-dev installs and adds the entry to the package.json file devDependencies
--no-save installs but does not add the entry to the package.json file dependencies
--save-optional installs and adds the entry to the package.json file optionalDependencies
--no-optional will prevent optional dependencies from being installed
- The package.json file supports a format for specifying command line tasks - npm run <task-name>

ECMAScript 2015 (ES6) and beyond: https://node.green/

There is no difference between development and production in Node.js
- Always run your Node.js with the NODE_ENV=production set
- A popular way of configuring your application is by using the twelve factor methodology
  https://12factor.net/


# Vocab
Context - Environment
Quest - Search for something
