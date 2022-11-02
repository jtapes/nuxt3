import fs from 'fs'
import { getCountLineFile, getLinesFile } from '~/application/files-func'

export default defineEventHandler(async () => {
  const path = './public/log'
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '', 'utf8')
  }
  const count = await getCountLineFile(path)
  const lines = await getLinesFile(path, count - 10_000, count + 1)
  const phones = lines.map((line) => {
    const array = line.split(' ')
    return {
      spam: array[0] === 'true',
      phone: array[1],
      date: array[2],
    }
  })
  return phones.reverse()
})
