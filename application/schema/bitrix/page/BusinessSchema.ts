import { z } from 'zod'
import { ProductsSliderSchema } from '../ProductsSliderSchema'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'
import { ProductsHelpSchema } from '../ProductsHelpSchema'

export const BusinessSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    business_header: z
      .object({
        title: z.string(),
        text: z.string(),
        file: ImageSchema,
      })
      .optional(),
    business_complex: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_help: ProductsHelpSchema.optional(),
    business_help_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_positioning_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_positioning_left: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_positioning_bottom: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    business_solutions_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_solutions_left: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_solutions_top_2: z
      .object({
        title: z.string(),
      })
      .optional(),
    business_solutions_bottom: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    business_monitoring_left_top: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    business_monitoring_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_monitoring_left_center: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    business_monitoring_center: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    business_monitoring_bottom_left: z
      .object({
        title: z.string(),
      })
      .optional(),
    business_monitoring_bottom: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    business_products_slider: ProductsSliderSchema.optional(),
  }),
})
export type BusinessSchemaType = z.infer<typeof BusinessSchema>
