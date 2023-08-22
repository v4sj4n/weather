import sunnyIcon from '../../images/icons/weatherSunny.svg'
import './oneDay.css'

export default function oneDay(day) {
  const oneDayContainer = document.createElement('div')
  oneDayContainer.setAttribute('class', 'one-day-weather')

  const dayText = document.createElement('h2')
  dayText.textContent = `${day.calDate}`

  const weatherIcon = new Image()
  weatherIcon.src = sunnyIcon

  const minMaxText = document.createElement('h2')
  minMaxText.textContent = `${day.maxT}° / ${day.minT}°`

  oneDayContainer.appendChild(dayText)
  oneDayContainer.appendChild(weatherIcon)
  oneDayContainer.appendChild(minMaxText)

  return oneDayContainer
}
