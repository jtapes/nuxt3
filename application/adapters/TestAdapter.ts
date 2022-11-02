import { right, left } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'
import { TestLoad } from '~/domains/TestLoad'

export class TestAdapter implements TestLoad {
  async load() {
    const apiUrl = `/api/test`

    const api = await useFetch(apiUrl, {
      // initialCache: false,
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
