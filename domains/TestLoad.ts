import { Either } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'

export interface TestLoad {
  load(): Promise<Either<ErrorEntity, { name: string }>>
}
