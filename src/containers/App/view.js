import React from 'react'

import {
  Route,
} from 'react-router-dom'

import WeatherDashboard from 'containers/ToDos'

import './styles.css'

function App() {
  return (
    <div>
      <Route component={WeatherDashboard} path="/:filter?" />
    </div>
  )
}

export default App
