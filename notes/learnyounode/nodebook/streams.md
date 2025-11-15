# What? “Streams are arrays over time.”

Stream: Piece-by-piece `fs.createReadStream(), http.ServerResponse`
Buffer: All-at-once `fs.readFile(), http.get()`

# Why?

- Handle large datasets (files & network requests) without loading into memory at once
- Process data in manageable chunks (like compression, encryption, parsing)
- All streams in Node.js inherit from the EventEmitter class allowing them to emit events at various stages of data processing
- The pipeline() method also has an async pipeline() version, which doesn’t accept a callback
  but instead returns a promise that is rejected if the pipeline fails. (Connects streams)

# How to use streams?

# Stream types

- Can be readable, writable, or both, providing flexibility for different data-handling scenarios
- highWaterMark: Size of the internal buffer
  - in object mode this option refers to the number of objects, not bytes

## Readable is the class that we use to sequentially read a source of data

All readable streams are asynchronous iterables
Key Methods and Events:

- on('data')
- on('end') Emitted when there is no more data to read from the stream
- on('error')
- on('close') No more events will be emitted, and no further computation will occur
- on('readable')

## Writable streams are useful for creating files, uploading data, or any task that involves sequentially outputting data

Every writable stream must be “ended” to signal that no more data is coming

- on('finish') All data has been flushed to destination
- on('error')
- on('close')
- on('drain') Writable stream can accept more data (after backpressure)

## Duplex streams implement both the readable and writable interfaces

## Transform usually used readable and writable to transform the data as it passes through

- Async iterators: `for await...of` loop through the stream's data as it becomes available
  Handling each piece of data with the efficiency and simplicity of asynchronous code
- Object mode: By default, streams can work with strings, Buffer, TypedArray, or DataView
  However, it is possible to work with objects by setting the `objectMode` option to true
- Backpressure: it is important to make sure the producer doesn't overwhelm the consumer
  Pause the incoming Readable stream from sending any data and wait until the consumer is ready again
  Once the data buffer is emptied, a 'drain' event will be emitted to resume the incoming data flow
- Streams vs Web streams: The stream concept is not exclusive to Node.js

# Event Emitter = DOM Events

https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter

```js
import EventEmitter from "node:events";
const eventEmitter = new EventEmitter();

// 👂 Listens for connections
eventEmitter.on("start", () => {
  console.log("started");
});

// 🎙️ Runs when someone connects
eventEmitter.emit("start");
```

TCP = Road / HTTPS = Vehicle
how does node know that data is not coming more?
it doesn’t guess, it relies on the underlying protocol (usually TCP/HTTP) and the stream mechanics
