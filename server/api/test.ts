import mongoose from 'mongoose'
import { UserModel } from '~/application/mongose/model/UserModel'
import { users } from '~/users'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async () => {
  await mongoose.connect(runtimeConfig.mongoConnect)
  for (const userJson of users) {
    const user = await UserModel.findOne({ login: userJson.login })
    if (user === null) {
      const user = new UserModel({
        login: userJson.login,
        password: userJson.password,
      })
      user.save().then(() => console.log(`User save ${userJson.login}`))
    }
  }

  return true
})
