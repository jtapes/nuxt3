import { exec } from 'child_process'

function shell(command: string) {
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
export default defineEventHandler(async () => {
  // await shell('pm2 stop all')
  await shell('git clean -f')
  await shell('git reset --hard')
  await shell('git pull')
  await shell('yarn install')
  await shell('yarn run build')
  // shell('pm2 restart all')
  shell('reboot')
  return true
})
