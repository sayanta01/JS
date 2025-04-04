import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState(""); // newName state is for controlling the form input element 💡
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    // const nameExists = persons.some((person) => person.name === newName);
    // if (nameExists) {
    //   alert(`${newName} is already added to phonebook`);
    //   return; // stop execution if name exists
    // }
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    setPersons([...persons, nameObject]);
    setNewName(""); // clears the input field after submitting the form
    setNewNumber("");
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {/* Search: <input type="search" onChange={handleSearchFilter} /> */}
      <Filter searchTerm={searchTerm} handleSearchFilter={handleSearchFilter} />

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        setNewNumber={setNewNumber}
      />
      {/* <form onSubmit={addPerson}> */}
      {/*   <div> */}
      {/*     Name: <input value={newName} onChange={handleNameChange} /> */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     Number: */}
      {/*     <input */}
      {/*       type="tel" */}
      {/*       pattern="[0-9]*" */}
      {/*       value={newNumber} */}
      {/*       onChange={(e) => setNewNumber(e.target.value)} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <div> */}
      {/*     <button type="submit">add</button> */}
      {/*   </div> */}
      {/* </form> */}
      {/* <div>debug: {newName}</div> */}

      <h2>Contacts</h2>
      <Persons filteredPersons={filteredPersons} />
      {/* <ul> */}
      {/*   {filteredPersons.map((person) => ( */}
      {/*     <li key={person.name}> */}
      {/*       {person.name}: {person.number} */}
      {/*     </li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
};

export default Phonebook;
