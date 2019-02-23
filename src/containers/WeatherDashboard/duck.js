import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { fromJS, Map } from 'immutable'
import { denormalize } from 'normalizr'

import {
  domain,
  ERROR,
  SUCCESS,
} from 'store/constants'

// import {
//   completeTask,
//   createTask,
//   deleteTask,
//   loadTasks,
// } from 'utils/api'

import city from 'store/schemas/city'

/* Actions */
const weatherDashboard = domain.defineAction('weatherDashboard')

export const LOAD_CITIES = weatherDashboard.defineAction('LOAD_CITIES', [SUCCESS, ERROR])

/* Reducer */
const defaultState = fromJS({
  cities: [
    {
      name: 'Guadalajara',
      id: '8133378',
    },
    {
      name: 'Hoofddorp',
      id: '2753801',
      active: true,
    },
    {
      name: 'Baku',
      id: '587084',
    },
  ],
})

const reducer = handleActions({
}, defaultState)

export default reducer

/* Selectors */
export const getCities = (state) => {
  // eslint-disable-next-line reselect/first-param-name
  const citiesWithEntities = state.reduce((aggr, value, key) => {
    let result = aggr

    if (key === 'entities') {
      result = result.set(key, value)
    }

    if (key === 'resources') {
      result = result.set('weatherDashboard', value.get('weatherDashboard'))
    }

    return result
  }, Map())

  return citiesWithEntities
}

export const getID = (state, { match }) => (match ? match.params.id : '')

export const makeGetCities = () => createSelector(
  [getCities],
  (state) => {
    const result = denormalize(state.getIn(['weatherDashboard', 'cities']), [city], state.get('entities'))

    return result
  },
)

export const makeGetCurrentCity = () => createSelector(
  [getID, getCities],
  (id, state) => {
    const data = denormalize(state.getIn(['weatherDashboard', 'cities']), [city], state.get('entities'))
    const result = data.find(value => value.get('id') === id)

    return result
  },
)

/* Action Creators */

/* Side Effects */

/* eslint-disable */
export const weatherDashboardWatchers = [

]
/* eslint-enable */
