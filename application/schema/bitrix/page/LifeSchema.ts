import { z } from 'zod'
import { ImageSchema } from '../ImageShema'

export const LifeSchema = z.object({
  code: z.string(),
  name: z.string(),
  preview_picture: ImageSchema,
  detail_text: z.string(),
})
export type LifeSchemaType = z.infer<typeof LifeSchema>
