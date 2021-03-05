import express from 'express'
import config from "./middleware/index.js";
const app = express()


config(app)

export default app

