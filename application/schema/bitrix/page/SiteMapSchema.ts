import { z } from 'zod'

export const SiteMapSchema = z.object({
  news: z.array(z.string()).optional(),
  releases: z.array(z.string()).optional(),
  galleries: z.array(z.string()).optional(),
})
export type SiteMapSchemaType = z.infer<typeof SiteMapSchema>
