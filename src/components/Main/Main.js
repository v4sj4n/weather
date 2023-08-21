import './Main.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeatherExtra from '../WeatherExtra/WeatherExtra'
import threeDaysWeather from '../threeDayWeather/threeDaysWeather'

export default function Main() {
  const mainContainer = document.createElement('main')
  mainContainer.appendChild(
    CurrentWeather({
      max: 34,
      min: 22,
      current: 33,
      city: 'Tirana',
      country: 'Albania',
      sunrise: '05:54 AM',
      sunset: '19:35 PM',
    })
  )
  mainContainer.appendChild(
    WeatherExtra({
      wind: '1.5m/s N',
      pressure: '1012hPA',
      humidity: '52%',
      uv: 8,
      visibility: '10.0km',
      dewPoint: '22°C',
    })
  )
  mainContainer.appendChild(
    threeDaysWeather([
      { calDate: '20 Aug', minT: 22, maxT: 38 },
      { calDate: '21 Aug', minT: 25, maxT: 40 },
      { calDate: '22 Aug', minT: 26, maxT: 41 },
    ])
  )

  return mainContainer
}
