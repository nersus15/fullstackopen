import PropTypes from 'prop-types';
import Person from './Person';

const Persons = ({persons}) => <>{persons.map((person, i) => <Person key={i} name={person.name} number={person.number} />)}</>

Persons.propTypes = {
    persons: PropTypes.array.isRequired,
}

export default Persons;