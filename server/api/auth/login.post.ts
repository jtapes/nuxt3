export default defineEventHandler(async (event) => {
  const { login, password } = await useBody(event)
  if (login === '79139440800' && password === '6464') {
    setCookie(event, 'login', '79139440800')
    setCookie(event, 'password', '6464')
    return { success: true }
  } else if (
    getCookie(event, 'login') === '79139440800' &&
    getCookie(event, 'password') === '6464'
  ) {
    return { success: true }
  }
  throw createError({
    statusCode: 400,
    message:
      'неверный номер или пароль - свяжитесь с администратором\nтелеграм: @jtape\nтелефон: +7(913)944-08-00',
  })
})
