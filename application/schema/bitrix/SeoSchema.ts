import { z } from 'zod'

export const SeoSchema = z.object({
  title: z.nullable(z.string()),
  description: z.nullable(z.string()),
  keywords: z.nullable(z.string()),
})
export type SeoSchemaType = z.infer<typeof SeoSchema>
