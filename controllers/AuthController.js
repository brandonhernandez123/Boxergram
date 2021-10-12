const middleware = require('..middleware/')
const User = require('../models/user')

const Register = async (req, res) => {
  try {
    const { email, password, first_name, last_name, profile_picture } = req.body
    let password_digest = await middleware.hashPassword(password)
    const user = await User.create({
      email,
      password_digest,
      first_name,
      last_name,
      profile_picture
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
