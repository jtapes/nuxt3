import fs from 'fs'
import * as puppeteer from 'puppeteer'
import chromium from 'chromium'
import { telegramBot } from '~/application/telegramBot'
import { writeFile } from '~/application/files-func'
import { proxy, proxyType } from '~/application/proxy'
import { useDate } from '~~/composables/date'

const runtimeConfig = useRuntimeConfig()

declare global {
  namespace NodeJS {
    interface Process {
      puppeteerPage: any
      puppeteerBrowser: any
      puppeteerCount: number
      puppeteerErrorCount: number
      puppeteerDataTimeEnd: number | null
      progress: boolean
      proxy: proxyType
    }
  }
}

if (!process.proxy) {
  process.proxy = proxy
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

async function isSpam(phone: string): Promise<boolean> {
  if (process.puppeteerDataTimeEnd) {
    const timeEnd = Date.now() - process.puppeteerDataTimeEnd
    if (timeEnd <= 3000) {
      await delay(3000)
    }
  }

  try {
    if (!process.puppeteerPage || process.puppeteerCount >= 20) {
      if (process.puppeteerPage) {
        await process.puppeteerPage.close()
        await process.puppeteerBrowser.close()
        await delay(2000)
      }
      // eslint-disable-next-line
      console.log('process pupeteer')
      process.puppeteerCount = 0
      const options: any = {
        // headless: false,
        // devtools: true,
        args: ['--no-sandbox'],
        executablePath: runtimeConfig.chromium
          ? runtimeConfig.chromium
          : chromium.path,
      }
      if (process?.proxy?.getProxy) {
        // eslint-disable-next-line no-console
        console.log('смена прокси')
        options.args = [
          `--no-sandbox `,
          `--proxy-server=${process.proxy.getProxy}`,
        ]
      }

      process.puppeteerBrowser = await puppeteer.launch(options)
      process.puppeteerPage = await process.puppeteerBrowser.newPage()
      await process.puppeteerPage.goto(`https://ya.ru`)
      await delay(1000)
    }
    // const asd = await process.puppeteerPage.$('input.arrow__input')
    // console.log(asd)
    const imputEl = await process.puppeteerPage.$('input')
    if (imputEl) {
      await imputEl.click()
      await delay(500)
      await process.puppeteerPage.$eval('input', (el: any) => (el.value = ''))
      await imputEl.type(String(phone))
    } else {
      throw new Error('не найден input')
    }
    await delay(500)

    const searchButtonEl =
      (await process.puppeteerPage.$('.mini-suggest__button')) ||
      (await process.puppeteerPage.$('.button_size_search')) ||
      (await process.puppeteerPage.$('.search2-iframe__button')) ||
      (await process.puppeteerPage.$('.websearch-button')) ||
      (await process.puppeteerPage.$('button'))
    if (searchButtonEl) {
      await searchButtonEl.click()
    } else {
      throw new Error('не найден button')
    }
    await delay(2000)

    const hint = await process.puppeteerPage.$('.has-branding')
    if (!hint) {
      throw new Error('не найден хинт has-branding')
    }

    const isSpam = await process.puppeteerPage.evaluate(() => {
      const content = document.querySelector('.main__content')
      if (content) {
        return !(
          /данных об абоненте пока нет/.test(content.innerHTML) ||
          /номер компании/.test(content.innerHTML) ||
          /возможно, полезные звонки/.test(content.innerHTML) ||
          /доставка товаров/.test(content.innerHTML)
        )
      } else {
        throw new Error('не найден блок с контентом main__content')
      }
    })

    process.puppeteerCount += 1
    process.puppeteerErrorCount = 0
    process.puppeteerDataTimeEnd = Date.now()

    // eslint-disable-next-line no-console
    console.log(phone, isSpam, process?.proxy?.getProxy)
    return isSpam
  } catch (error: any) {
    if (!process.puppeteerErrorCount) process.puppeteerErrorCount = 0
    process.puppeteerErrorCount += 1
    // eslint-disable-next-line
    console.error(`error ${process.puppeteerErrorCount}`, error.toString())
    if (process.puppeteerPage) {
      await process.puppeteerPage.close()
      await process.puppeteerBrowser.close()
    }

    process.puppeteerCount = 0
    process.puppeteerDataTimeEnd = null
    process.puppeteerBrowser = null
    process.puppeteerPage = null
    if (process.proxy) process?.proxy?.updateProxy()
    await delay(2_000)

    if (process.puppeteerErrorCount >= 3) {
      process.puppeteerErrorCount = 0
      // eslint-disable-next-line
      console.log(`сброс - ${phone} отдан с ошибкой`)
      await delay(10_000)
      return false
      // throw new Error('неудалось проверить номер')
    } else {
      return isSpam(phone)
    }
  }
}

export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  if (!query.phone) {
    throw createError({
      statusCode: 400,
      message: 'нет номера телефона',
    })
  }
  if (process.progress) {
    throw createError({
      statusCode: 400,
      // message: 'нет номера телефона',
      message: 'проверка уже запущена другим пользователем',
    })
  }
  process.progress = true

  try {
    const spam = await isSpam(query.phone as string)
    if (spam) {
      await telegramBot(
        `${query.phone}`,
        '5750602084:AAFUzU4kInXvLiDPPyc8sIRMvbL5cPQHp64',
        '-1001573223119'
      )
    }

    const path = './public/log'
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, '', 'utf8')
    }
    const date = new Date()
    await writeFile(
      [`${spam} ${query.phone} ${useDate().format(date)}\r\n`],
      path
    )
    process.progress = false
    return { spam }
  } catch (error: any) {
    process.progress = false
    throw createError({
      statusCode: 400,
      message: error.toString(),
    })
  }
})
