import PropTypes from 'prop-types'
import Header from './Header';
import Content from './Content';
const Course = ({courses}) => {
    return (
        <div>
            {courses.map(course => {
                return (
                    <>
                        <Header name={course.name}></Header>
                        <Content parts={course.parts} />
                    </>
                );
            })}
        </div>
    )
}

Course.propTypes = {
    courses: PropTypes.array.isRequired
}

export default Course;