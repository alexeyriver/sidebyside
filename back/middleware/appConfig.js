import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'

// app.use(express.static(path.resolve('../front/build ? /')))

const appConfig = (app) => {
  dotenv.config()
  app.use(cors())
  app.use(morgan('dev'));
  app.use(express.static(path.resolve('../front/build/')))
  app.use('/public', express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('../front/build/index.html'))
  })
}


export default appConfig
