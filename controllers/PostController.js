const { User, Post, Event, Comment } = require('../models')

const GetAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'profile_picture']
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username', 'profile_picture']
          }
        }
      ]
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const NewPost = async (req, res) => {
  try {
    const newpost = await Post.create({ ...req.body })
    res.send(newpost)
  } catch (error) {
    throw error
  }
}

const GetOnePost = async (req, res) => {
  try {
    const PostsandUser = await Post.findByPk(req.params.post_id, {
      include: [
        {
          model: User,
          attributes: ['username', 'profile_picture']
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username', 'profile_picture']
          }
        }
      ]
    })
    res.send(PostsandUser)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.post_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.post_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.update(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPosts,
  NewPost,
  GetOnePost,
  DeletePost,
  UpdatePost
}
