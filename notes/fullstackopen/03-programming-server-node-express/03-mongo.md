# Debugging Node applications
- Printing to the console is a tried and true method, and it's always worth doing
  https://swizec.com/blog/javascript-debugging-slightly-beyond-consolelog/
## VS Code
- Can be done by Add Configuration... on the drop-down menu
  https://code.visualstudio.com/docs/debugtest/debugging
## Chrome DevTools
- Debugging is also possible with the Chrome developer console by starting your application with the command:
  `node --inspect index.js`
- You can access the debugger by clicking the green icon - the node logo - that appears in the Chrome developer console

# Question Everything
- The key is to be systematic. Since the problem can exist anywhere
  you must question everything, and eliminate all possibilities one by one
  Logging to the console, Postman, debuggers, and experience will help
- When bugs occur, the worst of all possible strategies is to continue writing code ❌
  It will guarantee that your code will soon have even more bugs, and debugging them will be even more difficult
  The Jidoka (stop and fix) principle from Toyota Production Systems is very effective in this situation as well

# MongoDB
- Why mongoose code is async by default?
- The reason for using Mongo as the database is its lower complexity compared to a relational database
  Document databases diff from relational databases in how they organize data as well as in the query languages they support
  Document databases are usually categorized under the NoSQL umbrella term
<!-- https://youtu.be/IFMfHhhq0ls?si=J4kSOxGnLrEjc_ss -->
<!-- - find() -->
<!--   Returns an array -->
<!--   If nothing matches, it returns an empty array -->
<!--   Use when you expect multiple results -->
<!--   You need to loop through the array or access items by index -->
<!---->
<!-- - findOne() -->
<!--   Returns a single object (or null) -->
<!--   If nothing matches, it returns null -->
<!--   Use when you only want one document -->
<!--   You can access the result directly without looping -->

# Schema: Tells Mongoose how the note objects are to be stored in the database
https://mongoosejs.com/docs/ - schemas, models, documents, queries 📕
- Schema = Cookie cutter
  Model = Cookie machine
- Mongoose automatically looks for the plural, lowercased version of your model name
- Document databases like Mongo are schemaless, meaning that the database itself does not care about
  the structure of the data that is stored in the database
  * It is possible to store documents with completely different fields in the same collection
    That's why Mongoose exist to bring structure to MongoDB

<!-- ----------------------------------------------------------------------- -->
# Things to know
- There are two servers in backend
  * Application Server: Runs backend code (Node.js with Express) that handles routes, business logic, and APIs
  * Database Server: Stores and retrieves data (MongoDB, PostgreSQL) in response to queries from the application server
<!-- - Postgre refers to "Post-Ingres" meaning "After-Ingres" -->
<!--   Ingres was an early RDBMS used before PostgreSQL -->
- The client sends request to the application, which processes it
  If necessary, the application queries the database and returns the response to the client
  ```text
  Database
  ├── Collection: Users
  │    ├── Document 1: { name: "Alice", age: 24, email: "alice@example.com" }
  │    ├── Document 2: { name: "Bob", age: 30, email: "bob@example.com" }
  ├── Collection: Orders
  │    ├── Document 1: { orderId: "001", userId: "1", total: 150 }
  │    ├── Document 2: { orderId: "002", userId: "2", total: 200 }
  ├── Collection: Products
  │    ├── Document 1: { productId: "A1", name: "Laptop", price: 1000 }
  │    ├── Document 2: { productId: "B2", name: "Phone", price: 500 }
  ```
- Collection (folders/groups storing related documents)
- Document (individual record)

<!-- mongoose.connect - database -->
<!-- model create     - collection -->
<!-- CREATE           - document -->

- Mongoose: A (ODM) library that creates a connection between MongoDB and the Node.js
  It provides a straightforward, schema-based solution to model application data
  without Mongoose, MongoDB is just a database
  Elegant MongoDB object modeling for Node.js
- MongoDB supports JavaScript through the official Node.js driver 💡
  You can connect your Node.js applications to MongoDB and work with your data
- Just as Express.js is built on top of Node.js's HTTP module
  Mongoose is built on top of the MongoDB driver

![](https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt4b651817f6dec60f/666848e371203e8537986b38/mern-stack.png)
[Client Sends Request to App]
            v
      [Node.js App]
            v
     [Mongoose (ODM)] Object Document Mapper
         Converts
  JS Object 🔁 MongoDB Document
            v
    [MongoDB Database]

- BSON https://www.mongodb.com/resources/basics/json-and-bson
<!-- ----------------------------------------------------------------------- -->


# Creating and saving objects
<!-- - Models are constructor functions that create new JavaScript objects based on the provided parameters -->
<!--   which also include methods for saving the object to the database -->

# Fetching objects from the database
- The parameter of the method is an object expressing search conditions
  `Note.find({ important: false }).then((result) => {}`


# Connecting the backend to a database
- The frontend assumes that every object has a unique id in the id field
  We also don't want to return the mongo versioning field __v to the frontend
- One way to format the objects returned by Mongoose is to modify the toJSON method of the schema
  MongoDB: output 'id' instead of '_id'
  Don't return the mongo versioning field __v
  Makes API responses clean & frontend-friendly
- Even though the _id property of Mongoose objects looks like a string, it is in fact an object❗
  The toJSON method we defined transforms it into a string just to be safe


# Moving db configuration to its own module
- The database connection URL should passed to the application via the MONGODB_URI environment variable 
  hardcoding it into the application is not a good idea
<!-- - Defining Node modules differs slightly from the way of defining ES6 modules -->
<!--   `module.exports = mongoose.model("Note", noteSchema)` -->

# Defining environment variables using the dotenv library
- A more sophisticated way to define environment variables is to use the dotenv library
- The .env file should be gitignored
- It's important that dotenv gets imported before the note model is imported
  This ensures that the environment variables from the .env file are available globally
  before the code from the other modules is imported


# Using database in route handlers 💡
- The note objects are created with the Note constructor function
  The response is sent inside of the callback function for the save operation
  This ensures that the response is sent only if the operation succeeded
- The savedNote parameter in the callback function is the saved and newly created note
  The data sent back in the response is the formatted version created automatically with the toJSON method
  <!-- Text-based flowchart of what happens when creating a new note? -->


# Verifying frontend and backend integration
- When the backend gets expanded, it's a good idea to test the backend first with the browser, Postman or the VS Code REST client
- Only once everything has been verified to work in the backend, is it a good idea to test that the frontend works with the backend
  It is highly inefficient to test things exclusively through the frontend
  Once everything seems to be working, we would move on to the next feature
- Once we introduce a database into the mix, it is useful to inspect the state persisted in the database
  e.g. from the control panel in MongoDB Atlas - `https://cloud.mongodb.com/`
  Quite often little Node helper programs like the mongo.js program we wrote earlier can be very helpful during development


# A true full stack developer's oath
The complexity of app has now taken another step since besides frontend and backend we also have a database
Full stack development is extremely hard, that is why I will use all the possible means to make it easier
- I will have my browser developer console open all the time
- I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
- I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
- I will keep an eye on the database: does the backend save data there in the right format
- I progress with small steps
- I will write lots of console.log statements to make sure I understand how the code behaves and to help pinpoint problems
- If my code does not work, I will not write more code
  Instead, I start deleting the code until it works or just return to a state when everything was still working


# Error💡handling
- Change behavior if a note with the given id doesn't exist
  the server will respond to the request with the HTTP status code 404 not found
  implement a simple catch block to handle cases where the promise returned by the findById method is rejected
  the response will have the status code 500 internal server error
- On top of the non-existing note, there's one more error situation that needs to be handled
  when trying to fetch a note with the wrong kind of id, meaning an id that doesn't match the Mongo identifier format
  Then we will end up in the error handler defined in the catch block
  the appropriate status code for the situation is 400 Bad Request
- When dealing with Promises, it's almost always a good idea to add error and exception handling
  Otherwise, you will find yourself dealing with strange bugs `just use try/catch`
  also added some data to the response to shed some light on the cause of the error
- The reason the error handler gets called might be something completely different than what you had anticipated
  If you log the error to the console, you may save yourself from long and frustrating debugging sessions
  Every time you're working on a project with a backend, it is critical to keep an eye on the console output of the backend

```js
app.get('/api/notes/:id', async (request, response) => {
  try {
    const note = await Note.findById(request.params.id)
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    console.log(error)
    response.status(400).send({ error: 'malformatted id' })
  }
})
```

# Moving error handling into middleware
- We have written the code for the error handler among the rest of our code
  but there are cases where it is better to implement all error handling in a single place
  can be useful if want to report data related to errors to an external error-tracking system like Sentry later on
- Change the handler for the /api/notes/:id route so that it passes the error forward with the next function
  <!-- `.catch(error => next(error))` // pass the error to the errorHandler middleware  -->
  So you don’t have to handle errors in every route
  If next() called without an argument, then the execution would simply move onto the next route or middleware
- Express error handlers are middleware that are defined with a function that accepts four parameters
  <!-- `const errorHandler = (error, request, response, next) => {}` -->
- The error handler checks if the error is a CastError exception
  in which case we know that the error was caused by an invalid object id for Mongo
  `if (error.name === 'CastError') {
     return response.status(400).send({ error: 'malformatted id' })
  }`
<!-- - Note that the error-handling middleware has to be the last loaded middleware -->
<!--   also all the routes should be registered before the error-handler! -->


# The order of middleware loading 💡
- The execution order of middleware is the same as the order that they are loaded into Express with the app.use function
  it is important to be careful when defining middleware
- The json-parser middleware should be among the very first middleware loaded into Express `app.use(express.json())`
  Because the JSON data sent with the HTTP requests would not be available
  for the logger middleware or the POST route handler, since the request.body would be undefined at that point
- It's also important that the middleware for handling unsupported routes is loaded
  only after all the routes have been defined, just before the error handler


# Other operations: deleting and updating an individual note
- The easiest way to delete a note from the database is with the findByIdAndDelete method
- In both of the "successful" cases of deleting a resource, the backend responds with the status code 204 no content❓
- Implement the functionality to update a single note:
  - First fetched from the database using the findById method `Note.findById(request.params.id)`
  - If no object is found in the database with the given id, the value of the variable note is null
    and the query responds with the status code 404 Not Found
  - If an object with the given id is found, its content and important fields are updated with the data provided in the request
    & the modified note is saved to the database using the save() method. The HTTP request responds by sending the updated note in the response
- How does the server send data back to the client?
  `response.json(updatedNote)`


# Sources
https://www.mongodb.com/resources/languages/javascript
https://www.mongodb.com/docs/manual/crud/
<!-- https://www.mongodb.com/docs/manual/reference/operator/query/ -->
<!-- https://www.mongodb.com/docs/manual/indexes/ -->
https://www.mongodb.com/docs/manual/data-modeling/
https://www.mongodb.com/docs/manual/reference/method/ObjectId/
https://mongodb.github.io/node-mongodb-native/
<!-- https://www.mongodb.com/developer/products/mongodb/cheat-sheet/ -->

<!-- Memorize This Mental Map -->
<!-- You only really need to: Querying & Validating -->
<!-- Store data -->
<!-- Read/filter it -->
<!-- Update it -->
<!-- Delete it -->
<!-- Do basic analytics (count, group, sort) -->
<!-- Do it all from Node.js (Mongoose helps) -->

# Terms
- Modeling: structuring data so the application can easily understand and use it
  Defining how application data should be structured (schemas)
  and how it mapped to documents in the MongoDB database
  helps the application understand the shape and rules of the data it's working with
- Aggregation pipeline: A conveyor belt where each stage does something
  like filtering, transforming, grouping, or sorting the data
- Public interface: What is exposed to external code (via module.exports)
- CastError: ConversionError


https://youtu.be/QPFlGswpyJY?si=P1c4UtKk6NTOK4rr
https://youtu.be/yo6ZXsgsyBA?si=KLUHDN7UUuJ8MVa1
https://www.mongodb.com/docs/manual/reference/operator/query/
ACID Properties in mongodb
- atomic operator
Linking vs Embedding (relationship is very important)
Aggregation Pipelines 🪨
Joins, but this are not that powerfull like SQL

# Vocab
Map: Transform
Sophisticated: Elegant

<!-- - The application works perfectly, except we haven't added -->
<!--   the functionality for changing the importance of a note to the backend yet -->
