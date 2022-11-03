export default defineEventHandler((event) => {
  // if (event.req.url && /main.css\.map/.test(event.req.url)) return null
  if (event.req.url && !/^\/$/.test(event.req.url)) {
    // eslint-disable-next-line
    console.log(event.res.statusCode, event.req.url)
  }
})
