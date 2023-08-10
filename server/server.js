import express from 'express'
import morgan from 'morgan'

// config
import { PORT } from '../config'

// middlewares
app.use(morgan('common'))
const app = express()
app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}\n` +
    'Press Ctrl-C to terminate.'))