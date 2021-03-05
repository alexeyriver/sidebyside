import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


const config = (app) => {
    dotenv.config()
    app.use(express.json)
    app.use(cors())
}


export default config