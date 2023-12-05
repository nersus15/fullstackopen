import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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
      name: newName
    };

    setPersons(persons.concat(objectPerson));
    setNewName('');
  }
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name}</p>)}
    </div>
  )
}

export default App