import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

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
        <Filter search={handleKeywordChange} keyword={keyword} />
      <h3>add a new</h3>
      <PersonForm submitForm={addPerson} changeName={handleNewNameChange} newName={newName} changeNumber={handleNewNumberChange} newNumber={newNumber}/>
      <h3>Numbers</h3>
      <Persons persons={filtered} />
    </div>
  )
}

export default App