import { Either } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'

export interface AuthUseCase {
  logIn(
    login: string,
    password: string
  ): Promise<Either<ErrorEntity, { success: boolean }>>
  logOut(): Promise<Either<ErrorEntity, { success: boolean }>>
}
