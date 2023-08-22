export default function tenHoursReturner(days, preferredWeather) {
  const tenHourForecast = []
  const currentTime = new Date()
  const hour = currentTime.getHours()
  const needAnotherDay = 24 - hour >= 10 ? false : true
  const finalHour = hour + 10
  if (!needAnotherDay) {
    if (preferredWeather === 'celsius') {
      for (let index = hour; index < finalHour; index++) {
        tenHourForecast.push({
          temp: Math.round(Number(days[0].hour[index].temp_c)),
          time: days[0].hour[index].time.split(' ')[1],
        })
      }
    } else {
      for (let index = hour; index < finalHour; index++) {
        tenHourForecast.push({
          temp: Math.round(Number(days[0].hour[index].temp_f)),
          time: days[0].hour[index].time.split(' ')[1],
        })
      }
    }
  } else {
    const timesFromOtherDay = finalHour - 24
    let forcas = days[0].hour.slice(hour)
    const otherHours = days[1].hour.slice(0, timesFromOtherDay)
    let tenhs = forcas.concat(otherHours)
    if (preferredWeather === 'celsius') {
      tenhs.forEach((element) => {
        tenHourForecast.push({
          temp: Math.round(Number(element.temp_c)),
          time: element.time.split(' ')[1],
        })
      })
    } else {
      tenhs.forEach((element) => {
        tenHourForecast.push({
          temp: Math.round(Number(element.temp_f)),
          time: element.time.split(' ')[1],
        })
      })
    }
  }

  return tenHourForecast
}
