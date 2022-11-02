import { z } from 'zod'

export const PaginationSchema = z.object({
  page: z.number(),
  page_count: z.number(),
  page_size: z.number(),
  total_elements: z.number(),
})
export type PaginationSchemaType = z.infer<typeof PaginationSchema>
