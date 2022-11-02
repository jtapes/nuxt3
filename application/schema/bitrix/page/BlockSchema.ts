import { z } from 'zod'

export const BlockSchema = z.object({
  title: z.string(),
  text: z.string(),
  number: z.number(),
  link: z.string(),
  list: z.array(z.string()),
  file: z.string(),
  file_list: z.array(z.string()),
})
export type BlockSchemaType = z.infer<typeof BlockSchema>
