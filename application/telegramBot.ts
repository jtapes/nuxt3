export function telegramBot(
  message: string,
  bot = '5750602084:AAFUzU4kInXvLiDPPyc8sIRMvbL5cPQHp64',
  chat = '-1001573223119'
) {
  const formData = new FormData()

  formData.append('chat_id', chat)
  formData.append('text', message)
  return fetch(`https://api.telegram.org/bot${bot}/sendMessage`, {
    method: 'POST',
    body: formData,
  })
}
