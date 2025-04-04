const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addPerson,
}) => (
  <form onSubmit={addPerson}>
    <div>
      Name: <input value={newName} onChange={handleNameChange} />
    </div>

    <div>
      Number:
      <input
        type="tel"
        pattern="[0-9]*"
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>

    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
