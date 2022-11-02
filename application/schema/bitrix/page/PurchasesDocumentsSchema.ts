import { z } from 'zod'
import { SeoSchema } from '../SeoSchema'

export const PurchasesDocumentsSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_purchases_documents_list: z
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
export type PurchasesDocumentsSchemaType = z.infer<
  typeof PurchasesDocumentsSchema
>
