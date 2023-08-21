import sunnyIcon from '../../images/icons/weatherSunny.svg'
import './oneDayWeather.css'

export default function oneDayWeather(day) {
  console.log(day)
  const oneDayContainer = document.createElement('div')
  oneDayContainer.setAttribute("class", "one-day-weather")
  
  const dayText = document.createElement('h2')
  dayText.textContent = `${day.calDate}`

  const weatherIcon = new Image()
  weatherIcon.src = sunnyIcon

  const minMaxText = document.createElement('h2')
  minMaxText.textContent = `${day.minT}° / ${day.maxT}°`

  oneDayContainer.appendChild(dayText)
  oneDayContainer.appendChild(weatherIcon)
  oneDayContainer.appendChild(minMaxText)

  return oneDayContainer
}
