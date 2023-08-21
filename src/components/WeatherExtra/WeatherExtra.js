import './WeatherExtra.css'
export default function WeatherExtra(extra) {
  const weatherExtraContainer = document.createElement('div')
  weatherExtraContainer.setAttribute('id', 'extra-weather')

  const weatherExtraFirstColumn = document.createElement('div')
  const weatherExtraSecondColumn = document.createElement('div')
  const windText = document.createElement('p')
  windText.innerHTML = `wind: <span>${extra.wind}</span>`
  const pressureText = document.createElement('p')
  pressureText.innerHTML = `pressure: <span>${extra.pressure}</span>`
  const humidityText = document.createElement('p')
  humidityText.innerHTML = `humidity: <span>${extra.humidity}</span>`
  const uvText = document.createElement('p')
  uvText.innerHTML = `uv: <span>${extra.uv}</span>`
  const visibilityText = document.createElement('p')
  visibilityText.innerHTML = `visibility: <span>${extra.visibility}</span>`
  const dewPointText = document.createElement('p')
  dewPointText.innerHTML = `dew point: <span>${extra.dewPoint}</span>`

  weatherExtraFirstColumn.appendChild(windText)
  weatherExtraFirstColumn.appendChild(pressureText)
  weatherExtraFirstColumn.appendChild(humidityText)
  weatherExtraSecondColumn.appendChild(uvText)
  weatherExtraSecondColumn.appendChild(visibilityText)
  weatherExtraSecondColumn.appendChild(dewPointText)

  weatherExtraContainer.appendChild(weatherExtraFirstColumn)
  weatherExtraContainer.appendChild(weatherExtraSecondColumn)

  return weatherExtraContainer
}

// wind: '1.5m/s N',
// pressure: '1012hPA',
// humidity: '52%',
// uv: 8,
// visibility: '10.0km',
// dewPoint: '22°C',
