const { User, Post, Event } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const SignUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  try {
    const UsersAndPostsAndEvents = await User.findByPk(req.params.user_id, {
      attributes: ['first_name', 'last_name', 'email', 'profile_picture'],
      include: [
        {
          model: Post
        },
        {
          model: Event
        }
      ]
    })
    res.send(UsersAndPostsAndEvents)
  } catch (error) {
    throw error
  }
}

const DeleteProfile = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({
      msg: 'Profile Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateProfile = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  SignUp,
  GetOneUser,
  DeleteProfile,
  UpdateProfile
}
