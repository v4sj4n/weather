export default function WeekDayDisplayer(date) {
  const datef = new Date(date)
  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).formatToParts(datef)

  return `${parts[4].value} ${parts[2].value}`
}
