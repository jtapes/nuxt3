import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { PaginationSchema } from '../PaginationSchema'
import { SeoSchema } from '../SeoSchema'

export const MediaItemSchema = z
  .object({
    items: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        date: z.string(),
        type: z.string(),
        preview_picture: z.nullable(ImageSchema.optional()).optional(),
        resource_link: z.string(),
      })
    ),
    pagination: PaginationSchema,
  })
  .optional()

export const MediaSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
})
export type MediaSchemaType = z.infer<typeof MediaSchema>
