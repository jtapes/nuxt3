import { defineNuxtConfig } from 'nuxt'
import { svgGenerate } from './svg-generate'

export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: true,
  },
  css: ['@/assets/styles/_reset.scss', '@/assets/styles/main.scss'],
  hooks: {
    'app:resolve': () => {
      return svgGenerate('./assets/sprite', './public/sprite')
    },
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      // script: [{ src: '/scripts/googleTag.js' }],
      link: [
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      ],
    },
  },

  runtimeConfig: {
    // chromium: process.env.PUPPETEER_EXECUTABLE_PATH,
    public: {
      // BASE_URL: process.env.BASE_URL || '',
    },
  },
})
