import './Main.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeatherExtra from '../WeatherExtra/WeatherExtra'
import threeDays from '../threeDays/threeDays'
import WeekDayDisplayer from '../../utils/WeekDayDisplayer'
import tenHours from '../tenHours/tenHours'
import tenHoursReturner from '../../utils/tenHoursReturner'

export default function Main(weatherInfo) {
  const mainContainer = document.createElement('main')
  const { current, forecast, location } = weatherInfo

  if (localStorage.getItem('temperature') === 'celsius') {
    mainContainer.appendChild(
      CurrentWeather({
        iconSrc: `http://${current.condition.icon.slice(2)}`,
        max: Math.round(Number(forecast.forecastday[0].day.maxtemp_c)),
        min: Math.round(Number(forecast.forecastday[0].day.mintemp_c)),
        current: Math.round(Number(current.temp_c)),
        city: location.name.replace(/\(\((.*)\)\)/, '$1'),
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
      threeDays([
        {
          iconSrc: `http://${forecast.forecastday[1].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[1].date),
          minT: Math.round(Number(forecast.forecastday[1].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[1].day.maxtemp_c)),
        },
        {
          iconSrc: `http://${forecast.forecastday[2].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[2].date),
          minT: Math.round(Number(forecast.forecastday[2].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[2].day.maxtemp_c)),
        },
        {
          iconSrc: `http://${forecast.forecastday[3].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[3].date),
          minT: Math.round(Number(forecast.forecastday[3].day.mintemp_c)),
          maxT: Math.round(Number(forecast.forecastday[3].day.maxtemp_c)),
        },
      ])
    )
    mainContainer.appendChild(
      tenHours(
        tenHoursReturner(forecast.forecastday.slice(0, 2), 'celsius', location)
      )
    )
  } else {
    mainContainer.appendChild(
      CurrentWeather({
        iconSrc: `http://${current.condition.icon.slice(2)}`,

        max: Math.round(Number(forecast.forecastday[0].day.maxtemp_f)),
        min: Math.round(Number(forecast.forecastday[0].day.mintemp_f)),
        current: Math.round(Number(current.temp_f)),
        city: location.name.replace(/\(\((.*)\)\)/, '$1'),
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
      threeDays([
        {
          iconSrc: `http://${forecast.forecastday[1].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[1].date),
          minT: Math.round(Number(forecast.forecastday[1].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[1].day.maxtemp_f)),
        },
        {
          iconSrc: `http://${forecast.forecastday[2].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[2].date),
          minT: Math.round(Number(forecast.forecastday[2].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[2].day.maxtemp_f)),
        },
        {
          iconSrc: `http://${forecast.forecastday[3].day.condition.icon.slice(
            2
          )}`,
          calDate: WeekDayDisplayer(forecast.forecastday[3].date),
          minT: Math.round(Number(forecast.forecastday[3].day.mintemp_f)),
          maxT: Math.round(Number(forecast.forecastday[3].day.maxtemp_f)),
        },
      ])
    )
    mainContainer.appendChild(
      tenHours(
        tenHoursReturner(
          forecast.forecastday.slice(0, 2),
          'fahrenheit',
          location
        )
      )
    )
  }

  return mainContainer
}
