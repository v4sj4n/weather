import './CurrentWeather.css'

export default function CurrentWeather(city) {
  const currentWeatherContainer = document.createElement('div')
  currentWeatherContainer.setAttribute('id', 'current-weather')

  // Weather Icon
  const currentWeatherIcon = new Image()
  currentWeatherIcon.src = city.iconSrc

  // Min/Max
  const pMinMax = document.createElement('p')
  pMinMax.textContent = `${city.max}° / ${city.min}°`

  // Current Temperature and Country

  // Curr Temp
  const tempCountryDiv = document.createElement('div')
  const currTemp = document.createElement('h1')
  currTemp.textContent = `${city.current}°`

  // Curr City and Country
  const territory = document.createElement('h2')
  territory.innerHTML = `<span>${city.city}</span>, ${city.country}`

  tempCountryDiv.appendChild(currTemp)
  tempCountryDiv.appendChild(territory)

  const sunTime = document.createElement('p')
  sunTime.innerHTML = `Sunrise: <span>${city.sunrise}</span> / Sunset: <span>${city.sunset}</span>`
  sunTime.setAttribute('id', 'suntime')

  currentWeatherContainer.appendChild(currentWeatherIcon)
  currentWeatherContainer.appendChild(pMinMax)
  currentWeatherContainer.appendChild(tempCountryDiv)
  currentWeatherContainer.appendChild(sunTime)

  return currentWeatherContainer
}
