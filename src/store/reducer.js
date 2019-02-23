import { connectRouter } from 'connected-react-router/immutable'
import { combineReducers } from 'redux-immutable'
import { Map, fromJS } from 'immutable'

/* Resources reducers imports */
import weatherDashboard from 'containers/WeatherDashboard/duck'
import languageProvider from 'containers/LanguageProvider/duck'

/* Utils */
export const clearReduxForm = state => (
  state
    .set('values', Map({}))
    .set(
      'fields',
      state.get('fields').map(field => field.set('touched', false)),
    )
)

/* UI reducers imports */

/* Entities reducer */
const entities = (state = fromJS({}), action) => {
  switch (action.type) {
    default: {
      if (action.entities) {
        return action.entities.reduce((aggr, value, key) => aggr.mergeIn([key], value), state)
      }

      return state
    }
  }
}

/* Resources reducer */
const resources = combineReducers({
  weatherDashboard,
  languageProvider,
})

/* UI Reducer */

/* Root Reducer */
const createRootReducer = history => combineReducers({
  entities,
  resources,
  router: connectRouter(history),
})

export default createRootReducer
