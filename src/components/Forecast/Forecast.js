import React from 'react'

import styles from './Forecast.css'

/**
 * Forecast displays the weather forecast
 */
function Forecast() {
  const message = 'hello darling'

  return (
    <div className={styles.forecast}>{message}</div>
  )
}

export default Forecast
