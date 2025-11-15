https://nodejsdesignpatterns.com/
https://www.patterns.dev/

## Creational Patterns

- Singleton Pattern: Ensure that a class has only one instance, while providing a global access point to this instance
- Factory Method: Provides an interface for creating objects in a superclass
  but allows subclasses to alter the type of objects that will be created

## Structural Patterns

- Decorator: Attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors
- Facade Pattern: Express.js uses facades internally to hide low-level details
- Proxy: Provide a substitute or placeholder for another object
- Adapter: Allows objects with incompatible interfaces to collaborate

## Behavioral Patterns

### Push-based System

- Reactor Pattern
- Error-First Callback
- EventEmitter: All objects which emit events are the instances of `process.EventEmitter` class
- Observer: Powerful tools for reacting to asynchronous events
- Pub-Sub

### Pull-based System

- Streams
- Middleware
- Strategy
- iterators

## Node-specific Patterns

- Module System

## Anti-Patterns

- Learn how callbacks really work to avoid common mistakes like Zalgo and uncaught exceptions

<!-- Architectural Patterns -->

- Why asynchronous is challenging? - Race Conditions, Shared State, SharedArrayBuffer
- async/await, exploring real-world patterns, gotchas like the "return await" trap
- How to use, compose, and create streams with confidence
