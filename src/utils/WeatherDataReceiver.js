export default async function WeatherDataReceiver(Component, city = 'rome') {
  let data
  if (localStorage.getItem('currentCity') === city) {
    const weatheri = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${process.env.WEATHER_API}`,
      {
        mode: 'cors',
      }
    )
    data = await weatheri.json()
    localStorage.setItem('currentCityInfo', JSON.stringify(data))
    localStorage.setItem('currentCity', city)
  } else {
    data = JSON.parse(localStorage.getItem('currentCityInfo'))
  }
  document.body.appendChild(Component(data))
}
