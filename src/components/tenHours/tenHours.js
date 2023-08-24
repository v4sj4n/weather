import oneHour from '../oneHour/oneHour'
import './tenHours.css'

export default function tenHours(tenhours) {
  const tenHoursContainer = document.createElement('div')
  const h1Introducer = document.createElement('h1')
  h1Introducer.textContent = '10 hours forecast'
  ;("The time on each element is related to your local time not the place's you entered")

  const weatherStuff = document.createElement('div')
  if (window.innerWidth <= 1000) {
    weatherStuff.setAttribute('class', 'scrollable')
  }
  tenHoursContainer.setAttribute('id', 'ten-hours-container')
  tenhours.forEach((hour) => {
    weatherStuff.appendChild(oneHour(hour))
  })
  tenHoursContainer.appendChild(h1Introducer)
  tenHoursContainer.appendChild(weatherStuff)

  return tenHoursContainer
}
