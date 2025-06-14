- Add user authentication and authorization to application
- Users should be stored in the database and every note should be linked to the user who created it
- Deleting and editing a note should only be allowed for the user who created it

# Managing Relationship in Document Database 💡
## Problem: Traditionally, document databases do not support join queries like relational databases
## Solution: Use references across collections to simulate relationships
- Document databases do not demand the foreign key to be stored
- Paradoxically, schema-less databases require developers to make far more radical design decisions
  about data organization at the beginning of the project than relational databases with schemas

# Mongoose schema for users
## References should be stored in both documents
- The note references the user who created it
- The user has an array of references to all the notes they created

# Creating users & Storing passwords
https://codahale.com/how-to-safely-store-a-password/
- Never store unencrypted passwords in plain text (use one-way hash function)
- Just use `bcrypt` for hash your password (slow hashing algorithm makes brute-force attacks harder)
## Problem: Ensure each user has a unique username
## Solution: Make sure there are no duplicate usernames already in the database
- First, find and delete any duplicates usernames
- Then, let the unique rule work properly
- Finally, handle errors nicely
- Key Point: You can't create a "no duplicates" rule if duplicates already exist
```
You:      unique: true
             ↓
Mongoose: Pass it on
             ↓
MongoDB:  Does the actual work (creates a unique index)
```
## Index violation: You added a rule, but your data already breaks it
- You're telling MongoDB: Hey, don't let anyone have the same username!
- But MongoDB says: I can't create that rule, you've already broken it!

- Create new feature then test it (TDD) tests for new functionality are written before the functionality is implemented
  * Takes much less effort to write automated tests, and it will make the development of our application much easier
- Make new users in a production or development environment
  * Send a POST request to /api/users/

# Creating a new note
<!-- - The code for creating a new note has to be updated so that the note is assigned to the user who created it -->
<!--   So that the information about the user who created a note is sent in the userId field of the request body -->
- Save the new note > Attach it to the user's notes[] (user who created it)

<!-- - We can see that the user has two notes -->
<!-- - Likewise, the ids of the users who created the notes can be seen when we visit the route for fetching all notes: -->
<!-- Due to the changes we made, the tests no longer pass, but we leave fixing the tests as an optional exercise -->
<!-- We will fix the frontend in part 5 of the course -->

# Populate: Lets you reference documents in other collections
- Fill the specified paths in the document with documents from other collections
## Problem: Document databases do not properly support join queries between collections
## Solution: Mongoose accomplishes the join by doing multiple queries
<!-- - Different from join queries in relational databases which are transactional -->
<!--   meaning that the state of the database does not change during the time that the query is made -->
<!-- - With join queries in Mongoose, nothing can guarantee that the state between the collections being joined is consistent -->
- The functionality of the populate method of Mongoose is based on the fact that ⚠️
  we have defined "types" to the references in the Mongoose schema with the ref option

# Lifecycle of populate Method
Blog.find({}).populate("user", { name: 1, username: 1 })
    ↓
Mongoose checks Blog schema: does "user" field have ref to another model?
- if Yes > Go to User collection
    ↓
Find User by ObjectId (fetch only name, username fields)
- ObjectId comes from request.body.userId sent in POST /api/blogs
```js
const user = await User.findById(request.body.userId);
user: user._id, // store ObjectId in blog to link user
```
    ↓
Replace ObjectId with selected User fields
    ↓
Return populated blog documents
<!-- ```js -->
<!-- { -->
<!--   user: "684b39c1c22a7aab4f91157f" // <-- ObjectId -->
<!-- } -->
<!--   ↓ -->
<!-- { -->
<!--   user: { -->
<!--     name: "Sayanta", -->
<!--     username: "bot", -->
<!--     id: "684b39c1c22a7aab4f91157f" -->
<!--   } -->
<!-- } -->
<!-- ``` -->

# Terms
One-to-Many Relationship: Users <> Notes (Each user can have many notes)

# Vocab
Populate: Fill
