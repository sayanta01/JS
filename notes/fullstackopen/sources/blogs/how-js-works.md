https://www.deepintodev.com/blog/how-javascript-works-behind-the-scenes

----------------       --------------------------------- 
|  Call Stack  |       |           Web APIs            |
|              |       |  callback             delay   |
|              |       |  () => log("1000ms")  1000ms  |
|              |       |                               |
|              |       |  callback             delay   |
|              |       |  () => log("2000ms")  2000ms  |
----------------       ---------------------------------
       |                               |              
       v                               v
----------------       ---------------------------------
|  Event Loop  |       |        Microtask Queue        |
|              | ----> |  Promise.then(() => ...)      |
|              |       ---------------------------------
|              |       |          Task Queue           |
|              |       |  () => log("1000ms")          |
|              |       |  () => log("2000ms")          |
----------------       ---------------------------------

- Microtask queue is a special queue dedicated to; .then, .catch, .finally callbacks and for async-await
  There are also some other functions like queueMicrotask, new mutationObserver

```js
Promise.resolve().then(() => console.log(32)); // Promise-based APIs

setTimeout(() => console.log(9), 5);

// Callback-based APIs
queueMicrotask(() => {
  console.log(11);
  queueMicrotask(() => console.log(4)); // Function passed as argument
});
console.log(3);
```
