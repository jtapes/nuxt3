import fetch from 'cross-fetch'
import { BusinessSchema } from '~/application/schema/bitrix/page/BusinessSchema'
import { CitizensSchema } from '~/application/schema/bitrix/page/CitizensSchema'
import { FooterSchema } from '~/application/schema/bitrix/FooterSchema'
import { GalleryItemSchema } from '~/application/schema/bitrix/page/GalleryItemSchema'
import { GovernmentSchema } from '~/application/schema/bitrix/page/GovernmentSchema'
import { HeaderSchema } from '~/application/schema/bitrix/HeaderSchema'
import { HomeSchema } from '~/application/schema/bitrix/page/HomeSchema'
import { NewsItemSchema } from '~/application/schema/bitrix/page/NewsItemSchema'
import { GallerySchema } from '~/application/schema/bitrix/page/GallerySchema'
import { MediaSchema } from '~/application/schema/bitrix/page/MediaSchema'
import { ReleasesSchema } from '~/application/schema/bitrix/page/ReleasesSchema'
import { ReleasesItemSchema } from '~/application/schema/bitrix/page/ReleasesItemSchema'
import { NewsSchema } from '~/application/schema/bitrix/page/NewsSchema'
import { SearchPageSchema } from '~/application/schema/bitrix/page/SearchSchema'
import { FaqSchema } from '~/application/schema/bitrix/page/FaqSchema'
import { EraGlonassSchema } from '~/application/schema/bitrix/page/EraGlonassSchema'
import {
  CareerSchema,
  ourLifeSchema,
} from '~/application/schema/bitrix/page/CareerSchema'
import { DocumentsSchema } from '~/application/schema/bitrix/page/DocumentsSchema'
import { AboutSchema } from '~/application/schema/bitrix/page/AboutSchema'
import { PartnersSchema } from '~/application/schema/bitrix/page/PartnersSchema'
import { PurchasesDocumentsSchema } from '~/application/schema/bitrix/page/PurchasesDocumentsSchema'
import { StructuresSchema } from '~/application/schema/bitrix/page/StructuresSchema'
import { BreadcrumbsSchema } from '~/application/schema/bitrix/page/BreadcrumbsSchema'

describe('api', () => {
  const baseUrl =
    process.env.BASE_URL || 'https://glonass-2022-backend.beta.agency'

  test('business', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/business/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = BusinessSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('citizens', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/citizens/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = CitizensSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('footer', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/footer/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = FooterSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('footer', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/footer/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = FooterSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('government', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/government/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = GovernmentSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('header', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/header/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = HeaderSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('home', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/home/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = HomeSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('gallery', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/gallery/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = GallerySchema.safeParse(json)
    if (valid.success && valid.data.blocks.gallery_gallery_block) {
      const codes = valid.data.blocks.gallery_gallery_block.items.map(
        (item) => item.code
      )

      if (codes && codes[0]) {
        const startTime = Date.now()
        const data = await fetch(`${baseUrl}/api/gallery/${codes[0]}/`)
        expect(data.status === 200).toBeTruthy()
        const json = await data.json()
        const validItem = GalleryItemSchema.safeParse(json)
        // eslint-disable-next-line
        console.log(`${Date.now() - startTime}ms`, data.url)
        expect(validItem.success).toBeTruthy()
      }
    }

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('mediafiles', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/mediafiles/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = MediaSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('news', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/news/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = NewsSchema.safeParse(json)
    if (valid.success) {
      const codes = valid.data.blocks?.news_news_block.items.map(
        (item) => item.code
      )

      if (codes && codes[0]) {
        const startTime = Date.now()
        const data = await fetch(`${baseUrl}/api/news/${codes[0]}/`)
        expect(data.status === 200).toBeTruthy()
        const json = await data.json()
        const validItem = NewsItemSchema.safeParse(json)

        if (!validItem.success) {
          // eslint-disable-next-line
          console.log(validItem.error, data.url)
        }
        // eslint-disable-next-line
        console.log(`${Date.now() - startTime}ms`, data.url)
        expect(validItem.success).toBeTruthy()
      }
    }

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('releases', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/releases/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = ReleasesSchema.safeParse(json)

    if (valid.success && valid.data.blocks.releases_release_block) {
      const codes = valid.data.blocks.releases_release_block.items.map(
        (item) => item.code
      )

      if (codes && codes[0]) {
        const startTime = Date.now()
        const data = await fetch(`${baseUrl}/api/releases/${codes[0]}/`)
        expect(data.status === 200).toBeTruthy()
        const json = await data.json()

        const validItem = ReleasesItemSchema.safeParse(json)
        if (!validItem.success) {
          // eslint-disable-next-line
          console.log(validItem.error, data.url)
        }
        // eslint-disable-next-line
        console.log(`${Date.now() - startTime}ms`, data.url)
        expect(validItem.success).toBeTruthy()
      }
    }

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('search', async () => {
    const startTime = Date.now()
    const search = 'глонасс'
    const data = await fetch(
      `${baseUrl}/api/search/?query=${search}&page=1&lang=ru`
    )

    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = SearchPageSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    if (valid.success && valid.data.items) {
      const reg = RegExp(search, 'gi')
      expect(reg.test(valid.data.items[0].title)).toBeTruthy()
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('faq', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/faq/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = FaqSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('era-glonass', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/era-glonass/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = EraGlonassSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('career', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/career/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = CareerSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('documents', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/documents/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = DocumentsSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('about', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/about/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = AboutSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('about_career_advantages_life_cards', async () => {
    const startTime = Date.now()
    const data = await fetch(
      `${baseUrl}/api/block/about_career_advantages_life_cards/`
    )
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = ourLifeSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('partners', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/partners/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = PartnersSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('purchases', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/purchases/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = PurchasesDocumentsSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('executives', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/executives/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = StructuresSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('executives', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/executives/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = StructuresSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('press-center breadcrumbs', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/press-center/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = BreadcrumbsSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('about breadcrumbs', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/about/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = BreadcrumbsSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })

  test('ao-glonass breadcrumbs', async () => {
    const startTime = Date.now()
    const data = await fetch(`${baseUrl}/api/page/ao-glonass/blocks/`)
    expect(data.status === 200).toBeTruthy()
    const json = await data.json()
    const valid = BreadcrumbsSchema.safeParse(json)

    if (!valid.success) {
      // eslint-disable-next-line
      console.log(valid.error, data.url)
    }
    // eslint-disable-next-line
    console.log(`${Date.now() - startTime}ms`, data.url)
    expect(valid.success).toBeTruthy()
  })
})
