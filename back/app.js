import express from 'express'
import appConfig from './middleware/appConfig.js'
import routersConfig from './middleware/routersConfig.js'
import dbConnect from './misc/dbConnect.js'

const app = express()

appConfig(app)
routersConfig(app)
dbConnect();

export default app

