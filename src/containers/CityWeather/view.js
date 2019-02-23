import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Spinner from 'components/Spinner'
import Forecast from 'components/Forecast'

// import messages from './messages'

// eslint-disable-next-line react/prefer-stateless-function
class CityWeather extends React.Component {
  componentWillMount() {
    const { city, requestCity } = this.props

    requestCity(city.get('id'))
  }

  componentWillReceiveProps(newProps) {
    const { city, requestCity } = this.props

    if (newProps.city.get('id') !== city.get('id')) {
      requestCity(newProps.city.get('id'))
    }
  }

  shouldComponentUpdate() {
    return true
  }

  render() {
    const { cityWeather } = this.props

    return cityWeather.get('isLoading')
      ? <Spinner />
      : <Forecast forecast={cityWeather.get('forecast').toJS()} />
  }
}

CityWeather.propTypes = {
  // Function to request
  city: ImmutablePropTypes.map,
  // cityWeather data
  cityWeather: ImmutablePropTypes.map,
  // Function to request city data
  requestCity: PropTypes.func,
}

export default CityWeather
