import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

const portCon = chalk.blue.bgWhite.bold

const App = express()
App.use(express.json)
App.use(cors({ origin: '*' }))

const port = process.env.PORT || 3001
App.listen(port, console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)))
