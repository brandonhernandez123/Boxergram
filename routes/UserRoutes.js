const Router = require('express').Router()

const UserController = require('../controllers/UserController')

// Router.get('/allprofiles', UserController.GetAllUsers)
Router.post('/signup', UserController.SignUp)
Router.delete(
  '/deleteprofile/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  UserController.DeleteProfile
)
Router.put(
  '/updateprofile/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  UserController.UpdateProfile
)
Router.get(
  '/profile/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  UserController.GetOneUser
)

module.exports = Router
