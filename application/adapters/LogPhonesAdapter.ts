import { right, left } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'
import { LogPhonesLoad } from '~/domains/LogPhonesLoad'

export class LogPhonesAdapter implements LogPhonesLoad {
  async load() {
    const apiUrl = `/api/log-phones`

    const api = await useFetch(apiUrl, {
      initialCache: false,
    })
    if (process.client && api.error.value) {
      await api.refresh()
    }

    if (api.data.value) {
      return right(api.data.value)
    } else {
      // @ts-ignore
      const body = api.error.value?.data
      const errorEntity = new ErrorEntity(body?.message, body?.stack)
      return left(errorEntity)
    }
  }
}
