const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get(
  '/comments',
  middleware.stripToken,
  middleware.verifyToken,
  CommentController.GetAllComments
)
Router.post(
  '/newcomment',
  middleware.stripToken,
  middleware.verifyToken,
  CommentController.NewComment
)
Router.delete(
  '/deletecomment/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  CommentController.DeleteComment
)
Router.put(
  '/updatecomment/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  CommentController.UpdateComment
)
Router.get(
  '/comment/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  CommentController.GetOneComment
)

module.exports = Router
