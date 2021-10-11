const { User, Post, Event } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const users = User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const SignUp = async (req, res) => {
  try {
    const newUser = User.create(req.body)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  const UsersAndPostsAndEvents = User.findByPk(req.params.user_id, {
    attributes: ['firstName', 'lastName'],
    include: [
      {
        model: Post,
        include: {
          model: Event
        }
      }
    ]
  })
  res.send(UsersAndPostsAndEvents)
}

module.exports = {
  GetAllUsers,
  SignUp,
  GetOneUser
}
