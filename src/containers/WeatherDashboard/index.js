import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeGetCities,
  makeGetCurrentCity,
} from './duck'

import ToDos from './view'

const mapStateToProps = createStructuredSelector({
  cities: makeGetCities(),
  currentCity: makeGetCurrentCity(),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToDos))
