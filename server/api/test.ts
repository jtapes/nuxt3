// import { BreadcrumbsSchema } from '~/application/schema/bitrix/page/BreadcrumbsSchema'
// import { errorZod } from '~/application/errorZod'
// import { BreadcrumbsType } from '~/domains/page/BreadcrumbsLoad'
// import { fetchNodeCach } from '~/application/fetchNodeCach'
//
// const runtimeConfig = useRuntimeConfig()
//
// export default defineEventHandler(async (event) => {
//   const query = useQuery(event)
//   const apiUrl = `${
//     process.env.BASE_URL || runtimeConfig.public.BASE_URL
//   }/api/page/about/blocks/?lang=${query.lang ? query.lang : 'ru'}`
//
//   const data = await fetchNodeCach({
//     url: apiUrl,
//     schema: BreadcrumbsSchema,
//   })
//   const valid = BreadcrumbsSchema.safeParse(data)
//   if (valid.success) {
//     const response: BreadcrumbsType = {
//       breadcrumbs: valid.data.blocks.child_pages
//         ? valid.data.blocks.child_pages.map((item) => {
//             return {
//               title: query.lang === 'ru' ? 'О компании' : 'About company',
//               text: item.title,
//               link:
//                 item.code === 'about' ? `/${item.code}` : `/about/${item.code}`,
//             }
//           })
//         : [],
//     }
//     return response
//   } else {
//     return errorZod(event, apiUrl, valid.error)
//   }
// })
