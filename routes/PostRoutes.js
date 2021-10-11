const PostController = require('../controllers/PostController')
const Router = require('express').Router()

Router.get('/posts', PostController.GetAllPosts)
Router.post('/newpost', PostController.NewPost)
Router.delete('/deletepost/:post_id', PostController.DeletePost)
Router.put('/updatepost/:post_id', PostController.UpdatePost)
Router.get('/posts/:post_id', PostController.GetOnePost)

module.exports = Router
