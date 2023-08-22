import oneHour from '../oneHour/oneHour'
import './tenHours.css'

export default function tenHours(tenhours) {
  const tenHoursContainer = document.createElement('div')
  const h1Introducer = document.createElement('h1')
  h1Introducer.textContent = '10 hours forecast'

  const weatherStuff = document.createElement('div')
  tenHoursContainer.setAttribute('id', 'ten-hours-container')
  tenhours.forEach((hour) => {
    weatherStuff.appendChild(oneHour(hour))
  })
  tenHoursContainer.appendChild(h1Introducer)
  tenHoursContainer.appendChild(weatherStuff)

  return tenHoursContainer
}
