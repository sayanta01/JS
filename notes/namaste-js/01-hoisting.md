# 1-How JavaScript Works!, 2-How JavaScript Code is executed?

When the code runs for the first time, the Global Execution Context is created in two phases

## Memory Creation Phase # var-env

- Variables: Declared and initialized as `undefined`
- Functions: Stored as they are, to use when invoked # happens due to hoisting

## Code Execution Phase # thread of execution

- Executes code line by line, using the allocated memory from the ^first phase # JS - synchronous single-threaded language
- Functions create an Execution Context when invoked, removed after execution
  "return" statement passes control back to the caller

# 3-Hoisting

Hoisting lets you access variables & functions before they're declared

## How Hoisting Works

- Variables: Partially hoisted, declared but initialized as `undefined` # same with function expression & arrow function expression
- Functions: Fully hoisted, can be called even before their declaration

## Errors

- undefined: Variable is declared but not assigned a value
- not defined: Variable is not declared anywhere in the code

https://namaste-javascript-handbook.vercel.app/docs/lecture-3 # examples

# 4-Functions & Variable Environment

Functions: The heart of JS and behave differently from other languages

- Function variables are only accessible within the function, unless explicitly returned or accessed outside

https://youtu.be/nuML9SmdbJ4?si=tb9gOHSMWsv0-ZCQ
https://youtu.be/HlgG395PQWw?si=mTXOopwK6EfIc5W7 - Never install locally
