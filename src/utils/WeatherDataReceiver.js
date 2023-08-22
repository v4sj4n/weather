export default async function WeatherDataReceiver(Component, city = 'rome') {
  let data
  const weatheri = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${process.env.WEATHER_API}`,
    {
      mode: 'cors',
    }
  )
  data = await weatheri.json()
  localStorage.setItem('currentCity', city)
  document.body.appendChild(Component(data))
}
