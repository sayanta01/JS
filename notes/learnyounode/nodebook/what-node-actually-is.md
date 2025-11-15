Think of it as an async event-driven i/o platform/infrastructure that happens to use JS as its scripting language.

When you write fs.readFile(), see the journey that request takes: from your JavaScript
through the C bindings, into the libuv library, handed off to the operating system
and the response bubbling all the way back up through the event loop

> fs.readFile() goes through: JS Api -> C Bindings -> libuv (prepares request) -> Thread Pool (performs i/o) 
  -> Event Loop (queues callback) -> JS callback execution Your code continues immediately after the readFile call

```text
V8 JS Engine
- makes JS fast enough for the server
- it compiles JS into native machine code
  ⬇️
Node Core Apis
- EventEmitter (JS interface for event-driven patterns)
- think of Node as a hyper-efficient event coordinator
- every Api, is built around this central premise: never block the main thread
  it’s why the default file reading method, fs.readFile, takes a callback
C Bindings
- glue that connects JS (require("fs")) to the underlying C & libuv functionality
  allowing you to access the filesystem, network, etc.
  ⬇️
libuv Library
- provides the async, non-blocking i/o model "makes Node... well, Node"
- some operations can’t be done asynchronously by the OS in a non-blocking way (worker thread pool)
  ⬇️
OS system calls
- epoll
```

# The Runtime - A Guided Tour Under the Hood

## Why Blocking i/o Was a Party Everyone Hated 📖

- C10K problem "thread-per-request"
- Slowest parts of any web-app is always the i/o operations - waiting for the network or disk

### Core idea of Node.js

- instead of dedicating a worker to each customer, what if you had one super-fast barista (the event loop) who just took orders?

# The Thread Pool

When you call a function that lacks a non-blocking equivalent at the OS level (like fs.readFile), libuv dispatches the work to its thread pool
Critically, network i/o is handled directly by the OS’s non-blocking mechanisms (like epoll, kqueue) and does not use the thread pool
allowing a single thread to handle tens of thousands of concurrent connections

# Checklist & Takeaways

- Your JS is single-threaded; the runtime is not
  libuv uses a small thread pool in the background for certain heavy operations to protect the main thread from blocking
- The mission: Don’t Block The Event Loop
- Think in events, not sequences. instead of a linear script,
  A Node application is a collection of event handlers (callbacks, Promises)
  waiting to be triggered by the event loop. Your job is to set up these listeners correctly
- The ecosystem (npm) is both your greatest asset and a potential liability
- Node is bigger than the backend

# ⚠️ Warning

Your JavaScript application logic runs on a single main thread which avoids many traditional
thread-locking problems, but you still must think about concurrent access to shared state

<!-- ----------------------------------------------------------------------- -->

[Ryan Dahl: Node JS](https://youtu.be/EeYvFl7li9E?si=Z7nQCvE-EUbg8dvV)

- No function should direct perform i/o
  To receive from disk, network, or another `process` there must be a callback
  Function that makes some query that returns something that's not allowed
- Everything is stream at low-level, but you can buffer the data if you want to

# Express.js = Node.js http, events, stream/buffer, fs, path, url, util modules
os
timers
- setTimeoutZero
https://github.com/goldbergyoni/nodebestpractices
