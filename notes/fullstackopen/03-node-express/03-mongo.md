Debugging Node applications:
- Printing to the console is a tried and true method, and it's always worth doing
  https://swizec.com/blog/javascript-debugging-slightly-beyond-consolelog/

Visual Studio Code:❓
- This can be done by choosing Add Configuration... on the drop-down menu
  which is located next to the green play button and above VARIABLES menu
  and select Run "npm start" in a debug terminal
  https://code.visualstudio.com/docs/debugtest/debugging

Question Everything:
- The key is to be systematic. Since the problem can exist anywhere
  you must question everything, and eliminate all possibilities one by one
  Logging to the console, Postman, debuggers, and experience will help
- When bugs occur, the worst of all possible strategies is to continue writing code ❌
  It will guarantee that your code will soon have even more bugs, and debugging them will be even more difficult
  The Jidoka (stop and fix) principle from Toyota Production Systems is very effective in this situation as well


MongoDB:
<!-- Why mongoose code is async by default? -->
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

- The reason for using Mongo as the database is its lower complexity compared to a relational database
  Document databases differ from relational databases in how they organize data as well as in the query languages they support
  Document databases are usually categorized under the NoSQL umbrella term


Schema: tells Mongoose how the note objects are to be stored in the database
https://mongoosejs.com/docs/ - schemas, models, documents, queries 📕
- Schema = Cookie cutter
  Model = Cookie machine
- Mongoose automatically looks for the plural, lowercased version of your model name
- Document databases like Mongo are schemaless, meaning that the database itself does not care about
  the structure of the data that is stored in the database
  It is possible to store documents with completely different fields in the same collection
  That's why Mongoose exist to bring structure to MongoDB

# ----------------------------------------
Things to know:
- There are two servers in backend
  Application Server: Runs backend code (Node.js with Express) that handles routes, business logic, and APIs
  Database Server: Stores and retrieves data (MongoDB, PostgreSQL) in response to queries from the application server
<!-- - Postgre refers to "Post-Ingres" meaning "After-Ingres" -->
<!--   Ingres was an early RDBMS used before PostgreSQL -->
- The client sends request to the application, which processes it
  If necessary, the application queries the database and returns the response to the client
`Database
├── Collection: Users
│    ├── Document 1: { name: "Alice", age: 25, email: "alice@example.com" }
│    ├── Document 2: { name: "Bob", age: 30, email: "bob@example.com" }
├── Collection: Orders
│    ├── Document 1: { orderId: "001", userId: "1", total: 150 }
│    ├── Document 2: { orderId: "002", userId: "2", total: 200 }
└── Collection: Products
├── Document 1: { productId: "A1", name: "Laptop", price: 1000 }
├── Document 2: { productId: "B2", name: "Phone", price: 500 }`
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
# ----------------------------------------


Creating and saving objects:
- Models are constructor functions that create new JavaScript objects based on the provided parameters
  which also include methods for saving the object to the database

Fetching objects from the database:
- The parameter of the method is an object expressing search conditions
  `Note.find({ important: false }).then((result) => {}`


Connecting the backend to a database:
- The frontend assumes that every object has a unique id in the id field
  We also don't want to return the mongo versioning field __v to the frontend
- One way to format the objects returned by Mongoose is to modify the toJSON method of the schema
  MongoDB: output 'id' instead of '_id'
  Don't return the mongo versioning field __v
  Makes API responses clean & frontend-friendly
- Even though the _id property of Mongoose objects looks like a string, it is in fact an object❗
  The toJSON method we defined transforms it into a string just to be safe


Moving db configuration to its own module:
- The database connection URL should passed to the application via the MONGODB_URI environment variable 
  hardcoding it into the application is not a good idea
<!-- - Defining Node modules differs slightly from the way of defining ES6 modules -->
<!--   `module.exports = mongoose.model("Note", noteSchema)` -->

Defining environment variables using the dotenv library:
- A more sophisticated way to define environment variables is to use the dotenv library
- The .env file should be gitignored
- It's important that dotenv gets imported before the note model is imported
  This ensures that the environment variables from the .env file are available globally
  before the code from the other modules is imported


Using database in route handlers: 💡
- The note objects are created with the Note constructor function
  The response is sent inside of the callback function for the save operation
  This ensures that the response is sent only if the operation succeeded
- The savedNote parameter in the callback function is the saved and newly created note
  The data sent back in the response is the formatted version created automatically with the toJSON method
  <!-- Text-based flowchart of what happens when creating a new note? -->


Verifying frontend and backend integration:
- When the backend gets expanded, it's a good idea to test the backend first with the browser, Postman or the VS Code REST client


Resources:
https://www.mongodb.com/resources/languages/javascript
https://www.mongodb.com/docs/manual/crud/
https://www.mongodb.com/docs/manual/reference/operator/query/
https://www.mongodb.com/docs/manual/indexes/
https://www.mongodb.com/docs/manual/data-modeling/
https://www.mongodb.com/docs/manual/reference/method/ObjectId/
https://mongodb.github.io/node-mongodb-native/
https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

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
- Public interface?

# Vocab
Map: Transform
Sophisticated: Elegant

sayanta
eWbEU4hsBKhkQBsJ
Connection String:
`mongodb+srv://sayanta:${password}@cluster0.kkvr7dj.mongodb.net/note📍App?retryWrites=true&w=majority&appName=Cluster0`;
MONGODB_URI="mongodb+srv://sayanta:${password}@cluster0.kkvr7dj.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0" npm run dev

<!-- - The application works perfectly, except we haven't added -->
<!--   the functionality for changing the importance of a note to the backend yet -->
