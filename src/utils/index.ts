export const isNotFutureDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('.').map(Number)
  const inputDate = new Date(year, month - 1, day)
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  return inputDate <= today
}
