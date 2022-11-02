import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'

export const StructuresSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_executives_list: z
      .object({
        board_of_directors: z
          .array(
            z.object({
              title: z.string(),
              text: z.string(),
              subtitle: z.string().optional(),
            })
          )
          .optional(),
        directors: z
          .array(
            z.object({
              title: z.string(),
              text: z.string(),
              preview_picture: ImageSchema,
            })
          )
          .optional(),
      })
      .optional(),
  }),
})
export type StructuresSchemaType = z.infer<typeof StructuresSchema>
