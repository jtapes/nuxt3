import { defineNuxtPlugin } from '#app'
import smoothscroll from 'smoothscroll-polyfill'

export default defineNuxtPlugin(() => {
  if (process.client) {
    smoothscroll.polyfill()
  }
})
