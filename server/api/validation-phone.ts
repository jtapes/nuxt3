// import fs from 'fs'
// import * as puppeteer from 'puppeteer'
// import chromium from 'chromium'
//
// const runtimeConfig = useRuntimeConfig()
//
// function delay(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true)
//     }, ms)
//   })
// }
//
// export default defineEventHandler(async (event) => {
//   const query = useQuery(event)
//   if (!query.phone) return
//   console.log(query.phone)
//   try {
//     const obj = {
//       // sudo apt install -y chromium-browser
//       executablePath: runtimeConfig.chromium
//         ? runtimeConfig.chromium
//         : chromium.path,
//       // args: ['--no-sandbox'],
//
//       headless: false,
//       // devtools: true,
//     }
//     // if (query.proxy) {
//     //   obj.args = [`--proxy-server=${query.proxy}`]
//     // }
//     // await delay(Number(query.delay ? query.delay : 0))
//
//     const browser = await puppeteer.launch(obj)
//     const page = await browser.newPage()
//     await page.goto(`https://ya.ru`)
//
//     await delay(3000)
//     const element = await page.$('input')
//     if (element) {
//       await element.click()
//       await delay(200)
//       await element.type(String(query.phone))
//     }
//
//     await delay(400)
//     const button =
//       (await page.$('.mini-suggest__button')) ||
//       (await page.$('.button_size_search')) ||
//       (await page.$('.search2-iframe__button')) ||
//       (await page.$('.websearch-button')) ||
//       (await page.$('button'))
//     if (button) {
//       await button.click()
//     }
//     await delay(1000)
//
//     const status = await page.evaluate(() => {
//       const content = document.querySelector('.main__content')
//       if (content) {
//         return {
//           status:
//             /данных об абоненте пока нет/.test(content.innerHTML) ||
//             /возможно, полезные звонки/.test(content.innerHTML) ||
//             /номер компании/.test(content.innerHTML),
//         }
//       } else {
//         return { status: null }
//       }
//     })
//     if (typeof status.status === 'boolean') {
//       setTimeout(async () => {
//         try {
//           const path = './public/log'
//           const file = await fs.promises.readFile(path, 'utf8')
//           await delay(1000)
//
//           await fs.promises.writeFile(
//             path,
//             `${status.status ? 'ok' : 'spam'} - ${
//               query.phone
//             } - ${Date()}\n${file}`,
//             'utf8'
//           )
//         } catch (e) {
//           console.log(e)
//         }
//       }, 10_000)
//     }
//     console.log(status)
//
//     await delay(3000)
//     await page.close()
//     await browser.close()
//
//     if (typeof status.status !== 'boolean') event.res.statusCode = 400
//     await delay(200)
//
//     return status
//   } catch (e) {
//     console.log(e)
//     await delay(200)
//
//     event.res.statusCode = 400
//     // return new ErrorEntity(`error valid`, e)
//     return { status: null }
//   }
// })
