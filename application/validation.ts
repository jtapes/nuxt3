export const validateEmail = (value: string) => {
  return /^[A-Z0-9._%+-]{2,60}@{1}[A-Z0-9.-]{2,60}\.[A-Z]{2,60}$/i.test(
    value.toLowerCase()
  )
}
