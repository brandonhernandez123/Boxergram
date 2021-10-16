const PostController = require('../controllers/PostController')
const Router = require('express').Router()
const middleware = require('../middleware')

Router.get('/posts', PostController.GetAllPosts)
Router.post(
  '/newpost',

  PostController.NewPost
)
Router.delete(
  '/deletepost/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  PostController.DeletePost
)
Router.put(
  '/updatepost/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  PostController.UpdatePost
)
Router.get('/posts/:post_id', PostController.GetOnePost)

module.exports = Router
