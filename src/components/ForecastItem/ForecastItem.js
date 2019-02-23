import React from 'react'
import PropTypes from 'prop-types'
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiDayCloudyHigh,
  WiNightCloudyHigh,
  WiDayHail,
  WiNightHail,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog,
  WiCelsius,
  WiStrongWind,
} from 'weather-icons-react'

import {
  Col,
  Row,
} from 'components/Grid'

import styles from './ForecastItem.css'

const iconMapper = {
  '01d': WiDaySunny,
  '01n': WiNightClear,
  '02d': WiDayCloudy,
  '02n': WiNightCloudy,
  '03d': WiDayCloudyHigh,
  '03n': WiNightCloudyHigh,
  '04d': WiDayCloudyHigh,
  '04n': WiNightCloudyHigh,
  '09d': WiDayHail,
  '09n': WiNightHail,
  '10d': WiDayThunderstorm,
  '10n': WiNightThunderstorm,
  '13d': WiDaySnow,
  '13n': WiNightSnow,
  '50d': WiDayFog,
  '50n': WiNightFog,
}

/**
 * ForecastItem represents a row of time
 */
function ForecastItem(props) {
  const { forecastItem } = props
  const dateOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short',
    hour: '2-digit',
  }
  const date = new Date(forecastItem.dt_txt)
  const formattedDate = date.toLocaleDateString('en-US', dateOptions)
  const speedUnit = 'm/s'
  const IconComponentName = iconMapper[forecastItem.weather[0].icon]

  return (
    <Row className={styles.forecastItem} middle="xs" tagName="li">
      <Col tagName="h2" xs={6}>
        {formattedDate}
      </Col>

      <Col className={styles.weather} xs={2}>
        <IconComponentName color="#ccc" size={64} />
        <br />
        {forecastItem.weather[0].main}
      </Col>

      <Col className={styles.temperature} xs={2}>
        <WiCelsius color="#ccc" size={64} />
        <br />
        {forecastItem.main.temp}
      </Col>

      <Col className={styles.wind} xs={2}>
        <WiStrongWind color="#ccc" size={64} />
        <br />
        {forecastItem.wind.speed} {speedUnit}
      </Col>
    </Row>
  )
}

ForecastItem.propTypes = {
  // eslint-disable-next-line
  forecastItem: PropTypes.object,
}

export default ForecastItem
