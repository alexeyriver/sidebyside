import express from 'express'
import Message from "../models/Message.js";


const router = express.Router()


router.route('/')
.get(async(req,res) =>{
        const {id} = req.body
        const messages = await Message.find({recipient:id})
        res.json(messages)
})

.post(async (req,res) => {
    const {text,author,recipient} = req.body
    console.log(text,author,recipient, 'req body');
    const message = await Message.create({
        author:author,
        recipient:recipient,
        text:text,
    })
    res.json(message)
})


export default router
