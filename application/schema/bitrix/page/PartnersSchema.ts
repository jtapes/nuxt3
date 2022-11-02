import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'

export const PartnersSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_partners_list: z
      .object({
        items: z
          .array(
            z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  link: z.string(),
                  code: z.string(),
                  preview_picture: ImageSchema,
                })
              ),
            })
          )
          .optional(),
      })
      .optional(),
    about_partners_map: z
      .object({
        items: z
          .array(
            z.object({
              title: z.string(),
              location: z.array(z.number()),
              code: z.string(),
              link: z.string(),
              preview_picture: ImageSchema,
            })
          )
          .optional(),
      })
      .optional(),
  }),
})
export type PartnersSchemaType = z.infer<typeof PartnersSchema>
