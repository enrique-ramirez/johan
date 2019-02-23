import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { is } from 'immutable'
import { Helmet } from 'react-helmet'

import cityType from 'types/city'

import MainNav from 'components/MainNav'

import CityWeather from 'containers/CityWeather'

import messages from './messages'

// eslint-disable-next-line react/prefer-stateless-function
class WeatherDashboard extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { props } = this

    return !is(nextProps.cities, props.cities)
      || !is(nextProps.currentCity, props.currentCity)
  }

  render() {
    const {
      intl,
      cities,
      currentCity,
    } = this.props

    const title = 'Todos list'

    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
        </Helmet>

        <MainNav active={currentCity.get('id')} cities={cities.toJS()} />

        <CityWeather city={currentCity} />
      </div>
    )
  }
}

WeatherDashboard.propTypes = {
  /** React-router match prop. */
  cities: ImmutablePropTypes.listOf(cityType).isRequired,
  /** Current City. */
  currentCity: cityType,
  /** intl function */
  intl: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

export default WeatherDashboard
