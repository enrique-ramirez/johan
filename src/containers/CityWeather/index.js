import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  loadCity,
} from './duck'

import CityWeather from './view'

const mapStateToProps = createStructuredSelector({

})

const mapDispatchToProps = {
  requestCity: loadCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(CityWeather))
