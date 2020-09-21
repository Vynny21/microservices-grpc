import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema({
  id: Number,
  email: String,
  username: String,
  password: String
})

UserSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) next()

  this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password)
  }
}

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }), authConfig.secret, {
      expiresIn: 86400
    }
  }
}

export default model('User', UserSchema)
