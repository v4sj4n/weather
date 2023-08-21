import oneDayWeather from '../oneDayWeather/oneDayWeather'
import './threeDaysWeather.css'

export default function threeDaysWeather(threeDaysWeather) {
  const threeDaysContainer = document.createElement('div')
  threeDaysContainer.setAttribute('id', 'three-days-weather')

  const threeDaysLabel = document.createElement('h1')
  threeDaysLabel.textContent = '3 days forecast'

  threeDaysContainer.appendChild(threeDaysLabel)
  threeDaysWeather.forEach((day) => {
    threeDaysContainer.appendChild(oneDayWeather(day))
  })

  return threeDaysContainer
}
