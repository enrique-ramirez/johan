import { createAction, handleActions } from 'redux-actions'
import { takeLatest, put, call } from 'redux-saga/effects'
// import { createSelector } from 'reselect'
import { fromJS, Map } from 'immutable'
import { normalize } from 'normalizr'

import {
  domain,
  ERROR,
  SUCCESS,
} from 'store/constants'

import {
  loadWeather,
} from 'utils/api'

import forecast from 'store/schemas/forecast'

/* Actions */
const cityWeather = domain.defineAction('cityWeather')

export const LOAD_CITY = cityWeather.defineAction('LOAD_CITY', [SUCCESS, ERROR])

/* Reducer */
const defaultState = Map({ id: '', loading: true })

const reducer = handleActions({
  [LOAD_CITY.ACTION]: state => state.set('loading', true),
  [LOAD_CITY.SUCCESS]: (state, action) => state.set('id', action.payload).set('loading', false),
}, defaultState)

export default reducer

/* Selectors */
// export const getWeather

/* Action Creators */
export const loadCity = createAction(LOAD_CITY.ACTION)

/* Side Effects */
export function* loadCitySaga(action) {
  try {
    const response = yield call(loadWeather, action.payload)
    const normalized = yield call(normalize, response, forecast)

    yield put({
      type: LOAD_CITY.SUCCESS,
      payload: fromJS(normalized.result),
      entities: fromJS(normalized.entities),
    })
  } catch (err) {
    yield put({ type: LOAD_CITY.ERROR, payload: { error: err } })
  }
}

/* eslint-disable */
export const cityWeatherWatchers = [
  takeLatest(LOAD_CITY.ACTION, loadCitySaga),
]
/* eslint-enable */
