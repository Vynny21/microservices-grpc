import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: Number,
  email: String,
  username: String,
  passwordHash: String
})

export default mongoose.model('User', userSchema)