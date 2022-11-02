import { z } from 'zod'
import { ImageSchema } from '../ImageShema'
import { PaginationSchema } from '../PaginationSchema'
import { SeoSchema } from '../SeoSchema'

export const ourLifeSchema = z
  .object({
    items: z.array(
      z.object({
        name: z.string(),
        code: z.string().optional(),
        preview_picture: ImageSchema,
      })
    ),
    pagination: PaginationSchema,
  })
  .optional()

export const CareerSchema = z.object({
  page: z.string(),
  seo: SeoSchema,
  blocks: z.object({
    about_career_item_left: z
      .object({
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_text: z.string(),
      })
      .optional(),
    about_career_item_right: z
      .object({
        title: z.string(),
        file: ImageSchema,
      })
      .optional(),
    about_career_team_history_success: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    about_career_team_history_success_cards: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            text: z.string(),
            position: z.string(),
            preview_picture: ImageSchema,
          })
        ),
      })
      .optional(),
    about_career_team_personnel_reserve: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    about_career_team_personnel_reserve_cards: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            text: z.string(),
            position: z.string(),
            preview_picture: ImageSchema,
          })
        ),
      })
      .optional(),
    about_career_team_best_mentor: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    about_career_team_best_mentor_cards: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            text: z.string(),
            position: z.string(),
            preview_picture: ImageSchema,
          })
        ),
      })
      .optional(),
    about_career_advantages_life_cards: ourLifeSchema,
    about_career_advantages_life: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    career_advantages_offer: z
      .object({
        title: z.string(),
        text: z.string(),
        file_list: z.array(ImageSchema),
      })
      .optional(),
    career_advantages_offer_bottom: z
      .object({
        text: z.string(),
      })
      .optional(),
    career_career_work_offer: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    about_career_work_jobs: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            items: z.array(
              z.object({
                title: z.string(),
                text: z.string(),
                link: z.string(),
                code: z.string(),
              })
            ),
          })
        ),
      })
      .optional(),
    about_career_work_students: z
      .object({
        title: z.string(),
        text: z.string(),
      })
      .optional(),
    about_career_work_students_cards: z
      .object({
        items: z.array(
          z.object({
            name: z.string(),
            text: z.string().optional(),
            preview_picture: ImageSchema,
          })
        ),
      })
      .optional(),
  }),
})
export type CareerSchemaType = z.infer<typeof CareerSchema>
