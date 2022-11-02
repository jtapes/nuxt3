import { right, left } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'
import { SpamValidationPhoneUseCase } from '~/domains/SpamValidationPhoneUseCase'

export class SpamValidationPhoneAdapter implements SpamValidationPhoneUseCase {
  async isSpam(phone: string) {
    const apiUrl = `/api/spam-validation-phone`
    const api = await useFetch(apiUrl, {
      key: phone,
      initialCache: false,
      params: { phone },
    })
    // if (process.client && api.error.value) {
    //   await api.refresh()
    // }

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
