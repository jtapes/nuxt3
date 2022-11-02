import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { PaginationSchema } from '../PaginationSchema'
import { SeoSchema } from '../SeoSchema'

export const GallerySchemaItem = z
  .object({
    items: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        date: z.string(),
        preview_picture: ImageSchema,
        picture_count: z.number(),
        picture_list: z.array(ImageSchema),
      })
    ),
    pagination: PaginationSchema,
  })
  .optional()

export const GallerySchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    gallery_gallery_block: GallerySchemaItem,
  }),
})
export type GallerySchemaType = z.infer<typeof GallerySchema>
