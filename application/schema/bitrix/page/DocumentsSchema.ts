import { z } from 'zod'
import { SeoSchema } from '../SeoSchema'

export const DocumentsSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_documents: z
      .object({
        items: z
          .array(
            z
              .object({
                title: z.string(),
                list: z
                  .array(
                    z.object({
                      text: z.string(),
                      file: z.string(),
                    })
                  )
                  .optional(),
              })
              .optional()
          )
          .optional(),
      })
      .optional(),
  }),
})
export type DocumentsSchemaType = z.infer<typeof DocumentsSchema>
