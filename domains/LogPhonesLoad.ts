import { Either } from '@sweet-monads/either'
import { ErrorEntity } from '~/domains/ErrorEntity'

export interface LogPhonesLoad {
  load(): Promise<
    Either<ErrorEntity, { phone: string; spam: boolean; date: string }[]>
  >
}
