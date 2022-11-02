import { replaseTransfer } from '~/application/replaseTransfer'
import { telegramBot } from '~/application/telegramBot'

interface Cache {
  [key: string]: any
}
declare global {
  namespace NodeJS {
    interface Process {
      cach: Cache
    }
  }
}
export function fetchNodeCach({
  url,
  options,
  schema,
}: {
  url: string
  options?: object
  schema?: any
}) {
  return new Promise((resolve) => {
    if (!process.cach) process.cach = {}
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => replaseTransfer(json))
      .then((data) => {
        if (schema) {
          const valid = schema.safeParse(data)
          if (valid.success) {
            process.cach[url] = data
            resolve(data)
          } else {
            if (process.env.NODE_ENV !== 'development') {
              telegramBot(`${url} ${valid.error}`)
            }
            resolve(process.cach[url] ? process.cach[url] : data)
          }
        } else {
          process.cach[url] = data
          resolve(data)
        }
      })
      .catch((e: string) => {
        // eslint-disable-next-line
        console.log(`${url} ошибка сервера ${e}`)
        if (process.env.NODE_ENV !== 'development') {
          telegramBot(`${url} ошибка сервера ${e}`)
        }
        resolve({})
      })
    if (process.env.NODE_ENV !== 'development') {
      if (process.cach[url]) {
        // eslint-disable-next-line
        console.log('cach', url)
        resolve(process.cach[url])
      }
    }
  })
}
