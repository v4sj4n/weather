import './Main.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'

export default function Main() {
  const mainContainer = document.createElement('main')
  mainContainer.append(
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

  return mainContainer
}
