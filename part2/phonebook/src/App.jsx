import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [keyword, setKeyword] = useState('')

  const addPerson = (e) => {
    e.preventDefault();
    if (!newName) {
      alert('New Name cannot empty');
      return;
    }

    const exist = persons.find((person) => person.name == newName);
    if (exist !== undefined) {
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
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  }

  const filtered = keyword === '' ? persons : persons.filter((person) => person.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) );

  console.log(filtered);
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleKeywordChange} value={keyword} />
      </div>
      <h2>add a new</h2>
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
      {filtered.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App