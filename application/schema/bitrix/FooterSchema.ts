import { z } from 'zod'
import { ImageSchema } from './ImageShema'
import { SeoSchema } from './SeoSchema'

export const FooterSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    contacts: z.object({
      email: z.array(
        z.object({
          value: z.string(),
          name: z.string(),
          identifier: z.string(),
        })
      ),
      phone: z.array(
        z.object({
          value: z.string(),
          name: z.string(),
          identifier: z.string(),
        })
      ),
      address: z.array(
        z.object({
          value: z.string(),
          name: z.string(),
          identifier: z.string(),
        })
      ),
    }),
    social_links: z.array(
      z.object({
        name: z.string(),
        link: z.string(),
        icon: ImageSchema,
      })
    ),
    footer_copyright: z.object({
      title: z.string(),
      text: z.string(),
    }),
    footer_privacy_policy: z.object({
      link: z.string(),
      link_text: z.string(),
    }),
  }),
})
export type FooterSchemaType = z.infer<typeof FooterSchema>
