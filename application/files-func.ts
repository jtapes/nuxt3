import fs from 'fs'
import readline from 'readline'
import Stream from 'stream'
import util from 'util'
import { once } from 'events'

/**
 * Определим колличество строк в файле
 */
export function getCountLineFile(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    let lineCount = 0
    fs.createReadStream(filePath)
      .on('data', (buffer: any) => {
        // console.log( 1, buffer.toString() );

        let idx = -1
        lineCount-- // Because the loop will run once for idx=-1
        do {
          idx = buffer.indexOf(10, idx + 1)
          lineCount++
        } while (idx !== -1)
      })
      .on('end', () => {
        resolve(lineCount)
      })
      .on('error', reject)
  })
}

/**
 * Вернем массив строк из файла
 */
export function getLinesFile(
  filePath: string,
  startLine = 1,
  endLine = startLine
): Promise<string[]> {
  return new Promise(async (resolve) => {
    const instream: any = fs.createReadStream(filePath)
    // @ts-ignore
    const outstream: any = new Stream()
    outstream.readable = true
    outstream.writable = true
    const rl = readline.createInterface(instream, outstream)

    let count = 1
    const lines = []
    for await (const line of rl) {
      if (count >= startLine) {
        lines.push(line)
      }
      if (endLine - 1 <= count) {
        break
      }
      count++
    }
    resolve(lines)
  })
}

const finished = util.promisify(Stream.finished) // (A)
export async function writeFile(iterable: string[], filePath: string) {
  const writable = fs.createWriteStream(filePath, {
    encoding: 'utf8',
    flags: 'a',
  })
  for await (const chunk of iterable) {
    if (!writable.write(chunk)) {
      await once(writable, 'drain')
    }
  }
  writable.end()
  await finished(writable)
}
