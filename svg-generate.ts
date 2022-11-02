import fs from 'fs'
// console.log(asd)

function svgSymbol(name: string, svg: string) {
  svg = svg.replace(/[\r\n\t]/g, '')
  const body = svg.replace(/<svg[^>]*>([\s\S]*?)<\/svg>/, '$1')
  const attrs = svg.match(/[a-zA-Z]+=".+?"/g)

  if (attrs) {
    const attrsObject: { [key: string]: string } = attrs.reduce(
      (acc, attr): any => {
        const data = attr.split('=')
        acc[data[0]] = data[1]
        return acc
      },
      {} as { [key: string]: string }
    )

    return (
      `<symbol id="${name.toLowerCase()}" ` +
      (attrsObject.viewBox ? `viewBox=${attrsObject.viewBox} ` : '') +
      (attrsObject.fill ? `fill=${attrsObject.fill} ` : '') +
      (attrsObject.stroke ? `stroke=${attrsObject.stroke} ` : '') +
      `>${body}</symbol>`
    )
  }
}

export async function svgGenerate(pathStart: string, pathEnd: string) {
  await fs.promises.stat(pathEnd).catch(async () => {
    await fs.promises.mkdir(pathEnd)
  })
  const json: { [key: string]: string[] } = {}
  await fs.promises.readdir(pathStart).then(async (iconsFolders) => {
    for (const iconsFile of iconsFolders) {
      let svgSpriteTemplate = ''
      json[iconsFile] = []
      await fs.promises
        .readdir(`${pathStart}/${iconsFile}`)
        .then(async (icons) => {
          for (const icon of icons) {
            json[iconsFile].push(icon.replace('.svg', ''))
            await fs.promises
              .readFile(`${pathStart}/${iconsFile}/${icon}`, 'utf8')
              .then(async (svgCode: string) => {
                svgSpriteTemplate += await svgSymbol(
                  `${icon.replace('.svg', '')}`,
                  svgCode
                )
              })
          }
        })

      await fs.promises.writeFile(
        `${pathEnd}/${iconsFile}.svg`,
        `<?xml version="1.0" encoding="UTF-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${svgSpriteTemplate}</svg>`
      )
    }
  })
  await fs.promises.writeFile(`svg-sprite.json`, JSON.stringify(json))

  // eslint-disable-next-line no-console
  console.log('generate sprite')
  setTimeout(() => {
    return true
  }, 500)
}
