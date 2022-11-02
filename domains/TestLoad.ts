import { ErrorEntity } from '~/domains/ErrorEntity'

export interface TestLoad {
  load(): Promise<
    ErrorEntity | { phone: string; spam: boolean; date: string }[]
  >
}
