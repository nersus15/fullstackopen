import PropTypes from 'prop-types'
import Part from './Part';
const Content = ({parts}) => {
    const countSum = (sum, part) => sum + part.exercises;
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
            <p><b>total of {parts.reduce(countSum, 0)} exercises</b></p>
        </div>
    )
}

Content.propTypes = {
    parts: PropTypes.array.isRequired
}

export default Content;