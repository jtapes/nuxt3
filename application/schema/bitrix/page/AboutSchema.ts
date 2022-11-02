import { z } from 'zod'
import { SeoSchema } from '../SeoSchema'

export const AboutSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_top_item: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()).optional(),
      })
      .optional(),
    about_ao_glonass: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    about_tasks: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
  }),
})
export type AboutSchemaType = z.infer<typeof AboutSchema>
