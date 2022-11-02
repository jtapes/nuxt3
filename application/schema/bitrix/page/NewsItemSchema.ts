import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '~/application/schema/bitrix/SeoSchema'

export const NewsItemSchema = z.object({
  seo: SeoSchema,
  code: z.string(),
  name: z.string(),
  date: z.string(),
  preview_picture: ImageSchema,
  is_important: z.boolean(),
  detail_text: z.string(),
  detail_picture: z.nullable(ImageSchema),
})
export type NewsItemSchemaType = z.infer<typeof NewsItemSchema>
