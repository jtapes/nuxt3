import { z } from 'zod'
import { ImageSchema } from './ImageShema'

export const NewsItemSchema = z.object({
  code: z.string(),
  name: z.string(),
  date: z.string(),
  preview_picture: ImageSchema,
  is_important: z.boolean(),
})
export type NewsSchemaType = z.infer<typeof NewsItemSchema>
