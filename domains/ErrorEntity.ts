export class ErrorEntity {
  constructor(
    public readonly message: string,
    public readonly stack?: any,
    public readonly url?: any,
    public readonly statusCode?: any
  ) {
    // eslint-disable-next-line
    console.error(`error ${this.message}`, this.stack ? this.stack : '')
  }
}
