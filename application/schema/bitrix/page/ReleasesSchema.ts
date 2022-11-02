import { z } from 'zod'
import { PaginationSchema } from '../PaginationSchema'
import { SeoSchema } from '../SeoSchema'

export const ReleasesItemSchema = z
  .object({
    items: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        date: z.string(),
      })
    ),
    pagination: PaginationSchema,
  })
  .optional()

export const ReleasesSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    releases_release_block: ReleasesItemSchema,
  }),
})
export type ReleasesSchemaType = z.infer<typeof ReleasesSchema>
