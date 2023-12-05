import PropTypes from 'prop-types'

const Filter = ({search, keyword}) => {
    return (
        <div>
        filter shown with: <input onChange={search} value={keyword} />
      </div>
    );
}
Filter.propTypes = {
    search: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
}
export default Filter;