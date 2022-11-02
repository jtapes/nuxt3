export type proxyType = {
  list: string[]
  index: number
  getProxy: string | null
  updateProxy(): void
}
export const proxy: proxyType = {
  list: ['45.139.168.103:8000', '45.139.169.52:8000', '45.139.169.24:8000'],
  index: -1,
  get getProxy() {
    return this.index >= 0 && this.list[this.index]
      ? this.list[this.index]
      : null
  },
  updateProxy() {
    this.index = this.list.length > this.index ? this.index + 1 : -1
  },
}
