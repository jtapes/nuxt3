import { z } from 'zod'
// import { SeoSchema } from '../SeoSchema'

export const HomeSchema = z.object({
  // seo: SeoSchema,
  nameTest: z.string(),
})
export type HomeSchemaType = z.infer<typeof HomeSchema>
