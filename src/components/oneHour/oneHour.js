import './oneHour.css'

export default function oneHour(hourInfo) {
  const oneHourContainer = document.createElement('div')
  oneHourContainer.setAttribute('class', 'one-hour-container')
  const weatherIcon = new Image()
  weatherIcon.src = hourInfo.iconSrc

  const tempH3 = document.createElement('h3')
  tempH3.textContent = `${hourInfo.temp}°`
  const hourP = document.createElement('p')
  hourP.textContent = hourInfo.time

  oneHourContainer.appendChild(weatherIcon)
  oneHourContainer.appendChild(tempH3)
  oneHourContainer.appendChild(hourP)
  return oneHourContainer
}
