import { z } from 'zod'

export const ReleasesItemSchema = z.object({
  code: z.string(),
  name: z.string(),
  date: z.string(),
  preview_text: z.string().optional(),
  detail_text: z.string(),
})
export type ReleasesItemSchemaType = z.infer<typeof ReleasesItemSchema>
