import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'


const appConfig = (app) => {
    dotenv.config()
    app.use(cors())
    app.use(morgan('dev'));
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
}


export default appConfig
