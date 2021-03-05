import express from 'express'
import appConfig from './middleware/appConfig.js'
import dbConnect from './misc/dbConnect.js'

const app = express()

appConfig(app)
dbConnect();

export default app

