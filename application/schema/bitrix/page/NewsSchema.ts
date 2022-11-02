import { z } from 'zod'
import { PaginationSchema } from '../PaginationSchema'
import { SeoSchema } from '../SeoSchema'
import { NewsItemSchema } from '../NewsItemSchema'

export const ItemsNewsSchema = z.object({
  items: z.array(NewsItemSchema),
  pagination: PaginationSchema,
})

export const NewsSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z
    .object({
      news_news_block: ItemsNewsSchema,
    })
    .optional(),
})
export type NewsSchemaType = z.infer<typeof NewsSchema>
