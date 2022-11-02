import { z } from 'zod'

export const ProductsHelpSchema = z.array(
  z.object({
    title: z.string(),
    list: z.array(z.string()).optional(),
  })
)

export type ProductsHelpSchemaType = z.infer<typeof ProductsHelpSchema>
