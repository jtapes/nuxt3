import { HomeSchema } from '~/application/schema/page/HomeSchema'
// import { fetchNodeCach } from '~/application/fetchNodeCach'
// const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(() => {
  // const query = useQuery(event)
  // const apiUrl = `${
  //   process.env.BASE_URL || runtimeConfig.public.BASE_URL
  // }/api/page/about/blocks/?lang=${query.lang ? query.lang : 'ru'}`
  // const data = await fetchNodeCach({
  //   url: apiUrl,
  //   schema: BreadcrumbsSchema,
  // })
  const data = {
    aaa: 'Test',
  } as any
  const valid = HomeSchema.safeParse(data)
  if (valid.success) {
    return { name: valid.data.nameTest }
  } else {
    throw createError({
      statusCode: 400,
      message: `Error Zod`,
      stack: valid.error.toString(),
    })
  }
})
