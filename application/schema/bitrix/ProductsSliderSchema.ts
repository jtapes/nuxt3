import { z } from 'zod'
import { ImageSchema } from './ImageShema'

export const ProductsSliderSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      descriptions: z.array(z.string()),
      file: z.object({
        src: z.string(),
        description: z.string(),
      }),
      preview_picture: ImageSchema,
    })
  ),
})

export type ProductsSliderSchemaType = z.infer<typeof ProductsSliderSchema>
