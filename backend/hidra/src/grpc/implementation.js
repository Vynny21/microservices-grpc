import User from '../models/User';

export default {
  
  async getUsersById(call, callback) {
    const { id } = call.request;

    const user = await User.findById(id)

    if(!user) {
      return callback({ error: 'User not found' })
    }

    callback(null, { user })
  },

  async registerUser(call, callback) {
    const { username, email, password  } = call.request;

    if (call.request.email) return 'Email already exists.' 

    const user = await new User.create({ username, email, password})

    callback(null, { user })
  },

  async loginUser(call, callback) {
    const { email, password } = call.request;

    const user = await User.findOne({ email })

    if(!user) {
      return callback({ error: 'User not found' })
    }

    if (!(await user.compareHash(password))) {
      callback({ error: 'Invalid password' })
    }

    return callback(null, {
      token: User.generateToken(user)
    })

  }
}