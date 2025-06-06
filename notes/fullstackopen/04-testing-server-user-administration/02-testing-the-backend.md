<!-- - Testing where multiple components of the system are being tested as a group is called integration testing -->

# Test environment
https://github.com/node-config/node-config
- It is common practice to define separate modes for development, production and testing
  <!-- - `npm install cross-env` to make NODE_ENV work on windows -->
- Beneficial to implement the backend tests by mocking the database instead of using a real database
  achieve by running Mongodb-memory-server or by using Docker containers

# supertest: Testing the API
- injects requests directly into the app.js `app.use("/api/notes", notesRouter)` no need to .listen() on a port
- Tests only use the Express application defined in the app.js file, which does not listen to any ports
- NODE_ENV config flow `package.json > note_api.test.js > app.js > config.js`
  - Run a single test file with NODE_ENV=test `NODE_ENV=test node --test tests/note_api.test.js`

<!-- Separate utils function also for production and development -->
<!-- The middleware that outputs information about the HTTP requests is obstructing the test execution output. Let us modify the logger so that it does not print to the console in test mode: -->

# Initializing the database before tests
- Reset the test database and generate the needed test data before testing
  So that tests don’t depend on whatever data was there before `beforeEach`

# Running tests one by one
- When writing tests, it is usually wise to only execute one or two tests
  Accomplishing this with the `only` method & `npm test -- --test-only` ⚠️

# async/await
<!-- Problem  - http://callbackhell.com/ -->
<!-- Solution - https://javascript.info/promise-chaining (The then-chain is alright, but we can do better) -->
<!-- - The generator functions introduced in ES6 provided a clever way of writing asynchronous code -->
<!--   in a way that "looks synchronous". But the syntax is a bit clunky and not widely used -->
<!-- - The async and await keywords introduced in ES7 bring the same functionality as the generators -->
<!--   but in an understandable and syntactically cleaner way to the hands of all citizens of the JS world -->
<!-- - Await only works on functions that return a Promise 💡 -->
<!--   won't work on callback-based functions unless wrapped in a Promise -->

# More tests and refactoring the backend
- When code gets refactored, there is always the risk of regression, meaning that existing functionality may break
- Regression testing checks that old code still works after changes
<!-- Write a test that verifies that a note without content will not be saved into the database -->

# Eliminating the try-catch
- `express-async-errors` The 'magic' of the library allows us to eliminate the try-catch blocks completely
- We do not need the next(exception) call anymore. The library handles everything under the hood

# Optimizing the beforeEach function
<!-- - The problem is that each iteration of the forEach loop generates its own async operation -->
<!--   the await commands inside the forEach loop are not part of the beforeEach function -->
  - The `forEach` method expects a synchronous function as its parameter
- The solution is to wait for all of the asynchronous operations to finish executing with the `Promise.all`
  - The Promise.all method can be used for transforming an array of promises into a single promise
    that will be fulfilled once every promise in the array passed to it as an argument is resolved
  - Use `for...of` when promises need to be executed in a particular order

# A true full stack developer's oath
- If a test does not pass, I make sure that the tested functionality for sure works in the application

# Exercises
- Use async/await or .then(), but not both together
- There is no universal best way of writing tests, as it all depends on the application being tested and available resources

# Terms
Assert: Check
