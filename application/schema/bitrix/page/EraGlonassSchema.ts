import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'

export const EraGlonassSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    era_glonass_top_item: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
      })
      .optional(),
    era_glonass_history_title: z
      .object({
        title: z.string(),
      })
      .optional(),
    era_glonass_history_list: z.object({
      items: z
        .array(
          z.object({
            code: z.string(),
            name: z.string(),
            date: z.string(),
            preview_picture: ImageSchema,
          })
        )
        .optional(),
    }),
  }),
})
export type EraGlonassSchemaType = z.infer<typeof EraGlonassSchema>
