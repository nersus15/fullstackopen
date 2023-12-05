import PropTypes from 'prop-types'

const PersonForm = ({submitForm, changeName, newName, changeNumber, newNumber}) => {
    return (
        <form onSubmit={submitForm}>
            <div>
                name: <input onChange={changeName} value={newName} />
            </div>
            <div>
                number: <input onChange={changeNumber} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
PersonForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    newName: PropTypes.string.isRequired,
    changeNumber: PropTypes.func.isRequired,
    newNumber: PropTypes.string.isRequired
}
export default PersonForm;