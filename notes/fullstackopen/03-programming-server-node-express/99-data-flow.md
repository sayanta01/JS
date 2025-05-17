# Explain data flow of my MERN app from React to MongoDB & back

🔁 React ➡️ Axios ➡️ Express ➡️ MongoDB ➡️ Express ➡️ React
🔁 main.jsx ➡️ Phonebook.jsx ➡️ services/persons.js ➡️ server.js ➡️ models/person.js

React <Phonebook>
   |
   | (useEffect) > personService.getAll() > axios.get("/api/persons")
   v
Express (server.js)
   |
   | > Person.find({})
   v
MongoDB (persons collection)
   |
   | > returns documents
   v
Express > sends JSON response
   |
   v
React state < re-renders contacts list

[ADD]
User submits form
   |
   | > personService.create(newPerson) > axios.post("/api/persons")
   v
Express (POST /api/persons)
   |
   | > new Person({ name, number }).save()
   v
MongoDB (write operation)
   |
   | < returns new contact
   v
React state < add new person to list

[[./00-node-docs.md]]
[00-node-docs](./00-node-docs.md)
Link to [[another-note]]
