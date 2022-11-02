import { z } from 'zod'

export const HeaderSchema = z.object({
  page: z.string(),
  blocks: z.object({
    menu: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        identifier: z.string(),
        children: z.array(
          z.object({
            code: z.string(),
            name: z.string(),
            identifier: z.string(),
            children: z.array(z.string()).optional(),
          })
        ),
      })
    ),
  }),
})
export type HeaderSchemaType = z.infer<typeof HeaderSchema>
