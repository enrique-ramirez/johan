import { all } from 'redux-saga/effects'

import { cityWeatherWatchers } from 'containers/CityWeather/duck'

/* eslint-disable */
export default function* rootSaga() {
  yield all([
    ...cityWeatherWatchers,
  ])
}
/* eslint-enable */
