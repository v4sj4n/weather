import sunnyIcon from '../../images/icons/weatherSunny.svg'
import './oneHour.css'

export default function oneHour(hourInfo) {
  const oneHourContainer = document.createElement('div')
  oneHourContainer.setAttribute('class', 'one-hour-container')
  const weatherIcon = new Image()
  weatherIcon.src = sunnyIcon

  const tempH3 = document.createElement('h3')
  tempH3.textContent = hourInfo.temperature
  const hourP = document.createElement('p')
  hourP.textContent = hourInfo.hour

  oneHourContainer.appendChild(weatherIcon)
  oneHourContainer.appendChild(tempH3)
  oneHourContainer.appendChild(hourP)
  return oneHourContainer
}
