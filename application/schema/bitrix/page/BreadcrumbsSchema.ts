import { z } from 'zod'
import { SeoSchema } from '../SeoSchema'

export const BreadcrumbsSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    child_pages: z.array(
      z.object({
        title: z.string(),
        code: z.string(),
        description: z.string(),
      })
    ),
  }),
})
export type BreadcrumbsSchemaType = z.infer<typeof BreadcrumbsSchema>
