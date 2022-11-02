import { defineNuxtPlugin, useCookie } from '#app'
import { LengType } from '~/domains/LengLoad'

export default defineNuxtPlugin(() => {
  const lang = useCookie('lang')
  const route = useRoute()

  if (/^\/en/.test(route.fullPath)) {
    lang.value = 'en'
  } else {
    lang.value = 'ru'
  }

  const leng: LengType = {
    searchInput: lang.value === 'ru' ? 'Поиск' : 'Search',
    nothingFound: lang.value === 'ru' ? 'Ничего не найдено' : 'Nothing found',
    loadMore: lang.value === 'ru' ? 'Загрузить ещё' : 'Load more',
  }

  return {
    provide: {
      leng,
      localPath(path: string) {
        return `${lang.value === 'ru' ? '' : '/' + lang.value}${path}`
      },
    },
  }
})
