import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
} from 'components/Grid'
import ForecastItem from 'components/ForecastItem'

import styles from './Forecast.css'

/**
 * Forecast displays the weather forecast
 */
function Forecast(props) {
  const { forecast } = props
  const header = `${forecast.city.name}, ${forecast.city.country}`

  return (
    <div className={styles.forecast}>
      <header className={styles.header}>
        <h1>{header}</h1>
      </header>
      <Container isFluid tagName="ul">
        {forecast.list.map(forecastItem => (
          <ForecastItem key={forecastItem.dt} forecastItem={forecastItem} />
        ))}
      </Container>
    </div>
  )
}

Forecast.propTypes = {
  forecast: PropTypes.shape({
    city: PropTypes.shape({
      country: PropTypes.string,
      name: PropTypes.string,
    }),
    list: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default Forecast
