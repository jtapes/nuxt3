import { right, left } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'
import { AuthUseCase } from '~/domains/AuthLoginUseCase'

export class AuthAdapter implements AuthUseCase {
  async logIn(login: string, password: string) {
    const api = await useFetch(`/api/auth/login`, {
      method: 'post',
      body: { login, password },
      initialCache: false,
    })

    if (process.client && api.error.value) {
      await api.refresh()
    }

    if (api.data.value?.success === true) {
      return right(api.data.value)
    } else {
      // @ts-ignore
      const body = api.error.value?.data
      const errorEntity = new ErrorEntity(body?.message, body?.stack)
      return left(errorEntity)
    }
  }

  async logOut() {
    const LogOut = await new Promise((resolve) => resolve(true))
    return LogOut
      ? right({ success: true })
      : left(new ErrorEntity('Пользователь не авторизирован'))
  }
}
