export default async function WeatherDataReceiver(Component, city = 'rome') {
  const weatheri = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=${process.env.WEATHER_API}`,
    {
      mode: 'cors',
    }
  )
  const data = await weatheri.json()
  document.body.appendChild(Component(data))
}
