import { z } from 'zod'
import { ImageSchema } from '../ImageShema'

export const GalleryItemSchema = z.object({
  code: z.string(),
  name: z.string(),
  date: z.string(),
  preview_text: z.string(),
  preview_picture: ImageSchema,
  picture_list: z.array(ImageSchema),
})
export type GalleryItemSchemaType = z.infer<typeof GalleryItemSchema>
