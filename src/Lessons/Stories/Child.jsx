import PropTypes from 'prop-types'

export default function Child({ title, age }) {
  return (
    <div>
      <h1>title: {title?.toUpperCase()} | Age: {age}</h1>
    </div>
  )
}


Child.defaultProps = {
  age: 32
}

Child.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number,
  bool: PropTypes.bool,
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  obj: PropTypes.object,
}