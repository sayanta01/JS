https://www.deepintodev.com/blog/how-nodejs-works-behind-the-scenes

# Understanding the Event Loop is crucial
Web API works within the browser, libuv directly accesses operating system resources
Terms of request handling:
- Web API: Requests wait in the browser's own subsystems
- Node.js: Requests wait in the operating system's I/O queues
- libuv internally uses syscalls to interact with the OS (epoll on Linux)
- Node.js > libuv > POSIX System Calls > OS Kernel

# Event Loop
- Main module = initial phase (register callbacks)
## Phases of the Event Loop
- Each phase has a FIFO (First in, first out) queue of callbacks to execute

   ┌───────────────────────────┐
┌─>│           timers          │<──── Timers are not 100% accurate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │<──── Delayed error callbacks phase 
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │<──── None of your business
│  └─────────────┬─────────────┘     ┌───────────────┐
│  ┌─────────────┴─────────────┐     │   incoming:   │
│  │           p🎯ll           │<────┤  connections, │
│  └─────────────┬─────────────┘     │   data, etc.  │
│  ┌─────────────┴─────────────┐     └───────────────┘
│  │           check           │<──── setImmediate()
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

```js
const timerCallback = (a, b) => console.log(`Timer ${a} delayed for ${Date.now() - start - b}`);

const start = Date.now();
// setTimeout(cbFunc, delay, param1, param2)
setTimeout(timerCallback, 500, "500 ms", 500);
// We can say, our heavy operation in the initial phase took ...ms
// Because the timer that should run immediately (after 0ms), ran after ...ms
setTimeout(timerCallback, 0, "0 ms", 0);
// That's why the second (1ms timer) has delayed too
setTimeout(timerCallback, 1, "1 ms", 1);
setTimeout(timerCallback, 1000, "1000 ms", 1000);

for (let i = 0; i <= 1000000000; i++);
```
- Poll Phase: The most important phase
  Checks for completed I/O events & Executes callbacks for those completed events
  When Node.js application has nothing else to do, it will stay in the poll phase
- Check Phase: Unlike idle/prepare, this is a phase that we have "control" over as users
- process.nextTick() is actually very powerful (goes to microtask queue)
  Runs before other Promises in the microtask queue

## Go back to the Phases Overview section

# Terms
File descriptor
