const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.get('/comments', CommentController.GetAllComments)
Router.post('/newcomment', CommentController.NewComment)
Router.delete('/deletecomment/:comment_id', CommentController.DeleteComment)
Router.put('/updatecomment/:comment_id', CommentController.UpdateComment)
Router.get('/comment/:comment_id', CommentController.GetOneComment)

module.exports = Router
