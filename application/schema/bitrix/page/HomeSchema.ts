import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { SeoSchema } from '../SeoSchema'

export const HomeSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    home_main_banner: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    home_advantage_1: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_advantage_2: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_advantage_3: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_advantage_4: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_advantage_5: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_advantage_6: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_product_1: z
      .object({
        title: z.string(),
        file: z.object({
          src: z.string(),
          description: z.string(),
        }),
        file_list: z.array(ImageSchema),
        link: z.string(),
        text: z.string(),
      })
      .optional(),
    home_product_2: z
      .object({
        title: z.string(),
        file: z.object({
          src: z.string(),
          description: z.string(),
        }),
        file_list: z.array(ImageSchema),
        link: z.string(),
        text: z.string(),
      })
      .optional(),
    home_product_3: z
      .object({
        title: z.string(),
        file: z.object({
          src: z.string(),
          description: z.string(),
        }),
        file_list: z.array(ImageSchema),
        link: z.string(),
        text: z.string(),
      })
      .optional(),
    home_eraglonass_left: z
      .object({
        title: z.string(),
        link_text: z.string(),
        link: z.string(),
        text: z.string(),
      })
      .optional(),
    home_eraglonass_right: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_dashboard_right: z
      .object({
        file_list: z.array(ImageSchema),
      })
      .optional(),
    home_tehnology_left_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_tehnology_left_bottom: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_tehnology: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    home_news_preview: z
      .object({
        title: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    home_news: z
      .object({
        items: z.array(
          z.object({
            code: z.string(),
            name: z.string(),
            date: z.string(),
            preview_picture: ImageSchema,
            is_important: z.boolean(),
          })
        ),
      })
      .optional(),
    home_system: z
      .object({
        title: z.string(),
        link_text: z.string(),
        link: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    home_expertise_top: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    home_expertise_left_1: z
      .object({
        title: z.string(),
        text: z.string(),
        number: z.number(),
      })
      .optional(),
    home_expertise_left_2: z
      .object({
        title: z.string(),
        text: z.string(),
        number: z.number(),
      })
      .optional(),
    home_expertise_left_3: z
      .object({
        title: z.string(),
        text: z.string(),
        number: z.number(),
      })
      .optional(),
    home_expertise_bottom: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    home_create: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    home_create_development: z
      .object({
        title: z.string(),
        text: z.string(),
        list: z.array(z.string()),
      })
      .optional(),
    home_create_goals: z
      .object({
        title: z.string(),
        list: z.array(z.string()),
        file_list: z.array(ImageSchema),
      })
      .optional(),
  }),
})
export type HomeSchemaType = z.infer<typeof HomeSchema>
