import { z } from 'zod'
// import { SeoSchema } from '../SeoSchema'

export const HomeSchema = z.object({
  // seo: SeoSchema,
  name: z.string(),
})
export type HomeSchemaType = z.infer<typeof HomeSchema>
