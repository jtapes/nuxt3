import { z } from 'zod'

export const ImageSchema = z.nullable(
  z.object({
    src: z.string(),
    description: z.string(),
    src2x: z.string().optional(),
  })
)
export type ImageSchemaType = z.infer<typeof ImageSchema>
