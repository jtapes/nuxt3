import mongoose from 'mongoose'

export const UserModel = mongoose.model(
  'User',
  new mongoose.Schema({
    login: {
      type: String,
      required: true,
      unique: true,
      maxLength: 11,
      minlength: 11,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 4,
      minlength: 4,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  }),
  'Users'
)
