import { z } from 'zod'
import { SeoSchema } from '../SeoSchema'

export const FaqSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    faq_list: z.object({
      items: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
          })
        )
        .optional(),
    }),
  }),
})
export type FaqSchemaType = z.infer<typeof FaqSchema>
