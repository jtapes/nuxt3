const { exec } = require('child_process')

function shell(command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error)
        return
      }

      resolve(stdout.trim())
    })
  })
}
async function ci() {
  // eslint-disable-next-line no-console
  await shell('git clean -f').then((log) => console.log(log))
  // eslint-disable-next-line no-console
  await shell('git reset --hard').then((log) => console.log(log))
  // eslint-disable-next-line no-console
  await shell('git pull').then((log) => console.log(log))
  // eslint-disable-next-line no-console
  await shell('yarn install').then((log) => console.log(log))
  // eslint-disable-next-line no-console
  await shell('yarn run build').then((log) => console.log(log))
}
ci()
