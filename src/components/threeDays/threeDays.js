import oneDay from '../oneDay/oneDay'
import './threeDays.css'

export default function threeDays(threeDaysWeather) {
  const threeDaysContainer = document.createElement('div')
  threeDaysContainer.setAttribute('id', 'three-days-weather')

  const threeDaysLabel = document.createElement('h1')
  threeDaysLabel.textContent = '3 days forecast'

  threeDaysContainer.appendChild(threeDaysLabel)
  threeDaysWeather.forEach((day) => {
    threeDaysContainer.appendChild(oneDay(day))
  })

  return threeDaysContainer
}
