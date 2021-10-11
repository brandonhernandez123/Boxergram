const Router = require('express').Router()
const EventController = require('../controllers/EventController')

Router.get('/events', EventController.GetAllEvents)
Router.post('/newevent', EventController.NewEvent)
Router.delete('/deleteevent/:event_id', EventController.DeleteEvent)
Router.put('/updateevent/:event_id', EventController.UpdateEvent)
Router.get('/event/:event_id', EventController.GetOneEvent)

module.exports = Router
