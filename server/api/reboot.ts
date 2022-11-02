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
export default defineEventHandler(() => {
  return shell('reboot')
})
