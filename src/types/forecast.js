import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

const city = ImmutablePropTypes.contains({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
})

export default city
