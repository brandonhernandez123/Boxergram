const Router = require('express').Router()
const EventController = require('../controllers/EventController')
const middleware = require('../middleware')
Router.get('/events', EventController.GetAllEvents)
Router.post(
  '/newevent',
  middleware.stripToken,
  middleware.verifyToken,
  EventController.NewEvent
)
Router.delete(
  '/deleteevent/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  EventController.DeleteEvent
)
Router.put(
  '/updateevent/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  EventController.UpdateEvent
)
Router.get('/event/:event_id', EventController.GetOneEvent)

module.exports = Router
