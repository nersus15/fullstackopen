import PropTypes from 'prop-types'
import Part from './Part';
const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

Content.propTypes = {
    parts: PropTypes.array.isRequired
}

export default Content;