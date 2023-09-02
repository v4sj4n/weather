export default async function WeatherDataReceiver(Component, city) {
  let data
  const weatheri = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3&key=${process.env.WEATHER_API}`,
    {
      mode: 'cors',
    }
  )
  data = await weatheri.json()
  localStorage.setItem('currentCity', city)
  document.body.appendChild(Component(data))
}
