import { z } from 'zod'
import { ProductsSliderSchema } from '../ProductsSliderSchema'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'
import { ProductsHelpSchema } from '../ProductsHelpSchema'

export const GovernmentSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    government_advantage_top: z.object({
      title: z.string(),
    }),
    government_top_item: z
      .object({
        title: z.string(),
        text: z.string(),
        file: ImageSchema,
      })
      .optional(),
    government_solutions: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_solutions_left: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_solutions_help: ProductsHelpSchema.optional(),
    government_solutions_help_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_solutions_apply: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_solutions_connection: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_solutions_connection_left: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_advantage_left: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_advantage: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_advantage_2: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_advantage_3: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_opportunities_left: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    government_opportunities: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_functional_left: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    government_functional: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    government_products_slider: ProductsSliderSchema.optional(),
  }),
})
export type GovernmentSchemaType = z.infer<typeof GovernmentSchema>
