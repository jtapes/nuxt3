/* eslint-disable */
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru/index.js'
/* eslint-enable */

import parse from 'date-fns/parse/index.js'
export const formatting = 'dd.MM.yyyy:HH.mm.ss'

export const useDate = () => {
  return {
    format: (date: Date, options = {}, customForrmating = formatting) =>
      format(date, customForrmating, {
        ...options,
        locale: ru,
      }),
    parse: (srt: string) => {
      const date = new Date().getTimezoneOffset()
      return parse(srt, formatting, date)
    },
  }
}
