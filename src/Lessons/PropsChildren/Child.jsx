import PropTypes from 'prop-types'

export default function Child({ children, theme }) {
  console.log(children)
  return (
    <div className={`children-wrapper children-wrapper_${theme}`}>
      {children}
    </div>
  )
}


Child.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark'])
}