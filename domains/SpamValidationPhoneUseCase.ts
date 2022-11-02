import { Either } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'

export interface SpamValidationPhoneUseCase {
  isSpam(phone: string): Promise<Either<ErrorEntity, { spam: boolean }>>
}
