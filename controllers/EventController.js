const { User, Post, Event, Comment } = require('../models')

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
    res.send(events)
  } catch (error) {
    throw error
  }
}

const NewEvent = async (req, res) => {
  try {
    const newevent = await Event.create(req.body)
    res.send(newevent)
  } catch (error) {
    throw error
  }
}

const GetOneEvent = async (req, res) => {
  try {
    const EventandUser = await Event.findByPk(req.params.event_id)
    res.send(EventandUser)
  } catch (error) {
    throw error
  }
}

const DeleteEvent = async (req, res) => {
  try {
    await Event.destroy({ where: { id: req.params.event_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.event_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateEvent = async (req, res) => {
  try {
    const event = await Event.update(
      { ...req.body },
      { where: { id: req.params.event_id }, returning: true }
    )
    res.send(event)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllEvents,
  NewEvent,
  GetOneEvent,
  DeleteEvent,
  UpdateEvent
}
