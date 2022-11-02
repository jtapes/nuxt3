import { ErrorEntity } from '~/domains/ErrorEntity'

export function errorZod(event: any, url: string, stack: any) {
  const message = 'validation zod'
  event.res.statusCode = 400
  event.res.statusMessage = message
  return new ErrorEntity(`${message}`, stack, url, 400)
}
