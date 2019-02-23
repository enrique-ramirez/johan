import 'whatwg-fetch'

const apiKey = 'ca1629d8964c684900db3e217a65781b'
const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric`

const parseJSON = response => response.json()

// eslint-disable-next-line
export const loadWeather = cityID => (
  fetch(`${url}&id=${cityID}`).then(parseJSON)
)
