export default defineEventHandler((event) => {
  if (!['/api/auth/login', '/api/reboot'].includes(event.req.url as string)) {
    const isAuth =
      getCookie(event, 'login') === '79139440800' &&
      getCookie(event, 'password') === '6464'
    // const isAuth = await fetch('http://localhost/api/auth/login', {
    //   method: 'POST',
    // }).then((response) => response.json())
    // const isAuth = await useFetch('/api/auth/login', {
    //   initialCache: false,
    //   key: 'asd',
    // })
    if (
      !['/login', '/api/auth/login', '/api/test'].includes(
        event.req.url as string
      ) &&
      !isAuth
    ) {
      event.res.statusCode = 301
      event.res.setHeader('Location', '/login')
      return false
    }
  }

  if (event.req.url && /main.css\.map/.test(event.req.url)) return null
  if (event.req.url && !/^\/$/.test(event.req.url)) {
    // eslint-disable-next-line
    console.log(event.res.statusCode, event.req.url)
  }
})
