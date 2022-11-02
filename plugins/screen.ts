import { defineNuxtPlugin } from '#app'
import { reactive } from 'vue'

class Screen {
  private _width: number
  private _scrollY: number

  constructor(width: number, scrollY: number) {
    this._width = width
    this._scrollY = scrollY
  }

  get width() {
    return this._width
  }

  get scrollY() {
    return this._scrollY
  }

  get breakpoints(): number {
    if (this._width >= 1920) return 19
    else if (this._width >= 1680) return 16
    else if (this._width >= 1440) return 14
    else if (this._width >= 1280) return 12
    else if (this._width >= 1024) return 10
    else if (this._width >= 768) return 7
    else if (this._width >= 414) return 4
    else return 3
  }

  set width(width: number) {
    this._width = width
  }

  set scrollY(scrollY: number) {
    this._scrollY = scrollY
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    return {
      provide: {
        screen: reactive(new Screen(window.innerWidth, window.scrollY)),
      },
    }
  }

  const userAgent = nuxtApp.ssrContext?.req?.headers['user-agent'] as string
  const isMobile =
    /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
      userAgent
    )
  return {
    provide: {
      screen: reactive(new Screen(isMobile ? 768 : 1920, 0)),
    },
  }
})
