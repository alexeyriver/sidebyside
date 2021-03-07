import mongoose from "mongoose";
import express from 'express'
import Chat from "../models/Chat.js";
import User from "../models/User.js";



const router = express.Router()


router.route('/')
    .post(async (req,res) => {
        const { userID } = req.body
        const user = await User.findById(userID)
        const chat = await Chat.create({
            user:user._id
        })
        res.json(chat)
    })
    .put(async (req,res) => {

    })


export default router