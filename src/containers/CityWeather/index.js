import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeGetCityWeather,
  loadCity,
} from './duck'

import CityWeather from './view'

const mapStateToProps = createStructuredSelector({
  cityWeather: makeGetCityWeather(),
})

const mapDispatchToProps = {
  requestCity: loadCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CityWeather))
