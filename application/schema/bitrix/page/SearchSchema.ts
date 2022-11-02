import { z } from 'zod'
import { PaginationSchema } from '../PaginationSchema'

export const SearchPageSchema = z.object({
  items: z
    .array(
      z.object({
        title: z.string(),
        title_formatted: z.string(),
        body_formatted: z.string(),
        entity: z.object({
          code: z.string().optional(),
          page: z.string().optional(),
        }),
        entity_type: z.string(),
      })
    )
    .optional(),
  pagination: PaginationSchema,
})
export type SearchSchemaType = z.infer<typeof SearchPageSchema>
