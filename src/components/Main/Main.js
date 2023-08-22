import './Main.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeatherExtra from '../WeatherExtra/WeatherExtra'
import threeDaysWeather from '../threeDayWeather/threeDaysWeather'
import WeekDayDisplayer from '../../utils/WeekDayDisplayer'

export default function Main(weatherInfo) {
  const mainContainer = document.createElement('main')
  const { current, forecast, location } = weatherInfo
  console.log(current)
  console.log(forecast)
  console.log(location)
  console.log(WeekDayDisplayer(forecast.forecastday[1].date))

  if (localStorage.getItem('temperature') === 'celsius') {
    mainContainer.appendChild(
      CurrentWeather({
        max: Math.round(Number(forecast.forecastday[0].day.maxtemp_c)),
        min: Math.round(Number(forecast.forecastday[0].day.mintemp_c)),
        current: Math.round(Number(current.temp_c)),
        city: location.name,
        country: location.country,
        sunrise: forecast.forecastday[0].astro.sunrise,
        sunset: forecast.forecastday[0].astro.sunset,
      })
    )
    mainContainer.appendChild(
      WeatherExtra({
        wind: `${current.wind_kph}km/h ${current.wind_dir}`,
        pressure: `${current.pressure_mb}hPA`,
        humidity: `${current.humidity}%`,
        uv: current.uv,
        visibility: `${forecast.forecastday[0].hour[18].vis_km}km`,
        dewPoint: `${forecast.forecastday[0].hour[18].dewpoint_c}°C`,
      })
    )
    mainContainer.appendChild(
      threeDaysWeather([
        {
          calDate: WeekDayDisplayer(forecast.forecastday[1].date),
          minT: Math.round(Number(forecast.forecastday[1].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[1].day.maxtemp_c)),
        },
        {
          calDate: WeekDayDisplayer(forecast.forecastday[2].date),
          minT: Math.round(Number(forecast.forecastday[2].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[2].day.maxtemp_c)),
        },
        {
          calDate: WeekDayDisplayer(forecast.forecastday[3].date),
          minT: Math.round(Number(forecast.forecastday[3].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[3].day.maxtemp_c)),
        },
      ])
    )
  } else {
    mainContainer.appendChild(
      CurrentWeather({
        max: Math.round(Number(forecast.forecastday[0].day.maxtemp_f)),
        min: Math.round(Number(forecast.forecastday[0].day.mintemp_f)),
        current: Math.round(Number(current.temp_f)),
        city: location.name,
        country: location.country,
        sunrise: forecast.forecastday[0].astro.sunrise,
        sunset: forecast.forecastday[0].astro.sunset,
      })
    )
    mainContainer.appendChild(
      WeatherExtra({
        wind: `${current.wind_mph}mph ${current.wind_dir}`,
        pressure: `${current.pressure_mb}hPA`,
        humidity: `${current.humidity}%`,
        uv: current.uv,
        visibility: `${forecast.forecastday[0].hour[18].vis_miles}miles`,
        dewPoint: `${forecast.forecastday[0].hour[18].dewpoint_f}°F`,
      })
    )
    mainContainer.appendChild(
      threeDaysWeather([
        {
          calDate: WeekDayDisplayer(forecast.forecastday[1].date),
          minT: Math.round(Number(forecast.forecastday[1].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[1].day.maxtemp_f)),
        },
        {
          calDate: WeekDayDisplayer(forecast.forecastday[2].date),
          minT: Math.round(Number(forecast.forecastday[2].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[2].day.maxtemp_f)),
        },
        {
          calDate: WeekDayDisplayer(forecast.forecastday[3].date),
          minT: Math.round(Number(forecast.forecastday[3].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[3].day.maxtemp_f)),
        },
      ])
    )
  }

  return mainContainer
}
