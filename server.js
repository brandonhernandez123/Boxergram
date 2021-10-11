const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const UserRoutes = require('./routes/UserRoutes')
const PostRoutes = require('./routes/PostRoutes')
const EventRoutes = require('./routes/EventRoutes')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', UserRoutes, PostRoutes, EventRoutes)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
