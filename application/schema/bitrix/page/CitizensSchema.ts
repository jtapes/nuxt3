import { z } from 'zod'
import { ProductsSliderSchema } from '../ProductsSliderSchema'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'
import { ProductsHelpSchema } from '../ProductsHelpSchema'

export const CitizensSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    citizens_top_item: z
      .object({
        title: z.string(),
        text: z.string(),
        file: ImageSchema,
      })
      .optional(),
    citizens_about: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    citizens_about_2: z
      .object({
        title: z.string(),
      })
      .optional(),
    citizens_help: ProductsHelpSchema.optional(),
    citizens_help_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    citizens_system_top_left: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    citizens_system_top: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    citizens_system_bottom: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    citizens_connection: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    citizens_connection_about: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    citizens_info: z
      .object({
        title: z.string(),
        text: z.string(),
        link_text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    citizens_products_slider: ProductsSliderSchema.optional(),
  }),
})
export type CitizensSchemaType = z.infer<typeof CitizensSchema>
