import React from 'react'

import {
  Route,
} from 'react-router-dom'

import WeatherDashboard from 'containers/WeatherDashboard'

import './styles.css'

function App() {
  return (
    <div>
      <Route component={WeatherDashboard} path="/:id?" />
    </div>
  )
}

export default App
