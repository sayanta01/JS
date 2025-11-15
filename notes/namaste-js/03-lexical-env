# 7
Scope in JS is directly related to Lexical Environment
Lexical Scope: variables are found based on where they're written, not where the functions are called
Lex Env = local memory & ref to lex-env of ^parent
Lexical: in hierarchy, in order of scope

How it Works:
- it keeps looking outward until it finds the variable, called the "lex env chain"
- functions access variables from their own scope, parent scopes, and the global scope

Key Rules:
- inner functions can access parent function variables
- but, sibling functions can't access each other’s variables
- and also, parent functions can't access child function variables

# 8-temporal-dead-zone ---------------------------------------------------------
let & const are hoisted to a diff memory space "script" not "global" and can't be accessed before initialization
- TDZ: time between hoisting and initialization of let & const variable

var allows re-declaration and re-initialization; let & const don't
const must be declared and initialized on the same line # like in other languages

let & const aren't accessible via "window.var" or "this.var", as they're not stored in global memory

SyntaxError: invalid JS syntax
TypeError: using a value in an unsupported way or type # trying an unsupported operation on an object
- const num = 5; num(); // TypeError: num is not a function
ReferenceError: accessing an undeclared variable or one in the TDZ
