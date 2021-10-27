const { User, Post, Event, Comment } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    const events = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'profile_picture']
        },
        {
          model: Post
        },
        {
          model: Event
        }
      ]
    })
    res.send(events)
  } catch (error) {
    throw error
  }
}

const NewComment = async (req, res) => {
  try {
    const newcomment = await Comment.create(req.body)
    res.send(newcomment)
  } catch (error) {
    throw error
  }
}

const GetOneComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_id, {
      include: [
        {
          model: User,
          attributes: ['username', 'profile_picture']
        },
        {
          model: Post
        },
        {
          model: Event
        }
      ]
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send({
      msg: 'Comment Deleted',
      payload: req.params.comment_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdateComment,
  GetAllComments,
  GetOneComment,
  DeleteComment,
  NewComment
}
