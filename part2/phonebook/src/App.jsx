import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) =>{
    e.preventDefault();
    if(!newName) {
      alert('New Name cannot empty');
      return;
    }

    const exist = persons.find((person) => person.name == newName);
    if(exist !== undefined){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const objectPerson = {
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(objectPerson));
    setNewName('');
    setNewNumber('');
  }
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewNameChange} value={newName} />
        </div>
        <div>
        number: <input onChange={handleNewNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App