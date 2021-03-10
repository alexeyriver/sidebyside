import express from 'express'
import Message from "../models/Message.js";
import User from "../models/User.js";
import AdCard from "../models/AdCard.js";


const router = express.Router()


router.route('/')
    .put(async (req,res) => {
        const {id} = req.body
        const trip = await AdCard.findOne({_id:id})
        trip.participants.push()
    })

.post(async (req,res) => {
    const {text,author,recipient, trip} = req.body
    console.log(req.body,'<<<<');
    const message = await Message.create({
        author:author,
        recipient:recipient,
        text:text,
        trip:trip
    })
    const user = await User.findOne({_id:author._id})
    user.messages.push(message)
    await user.save()
    res.json(message)
})


router.route('/:id')
    .get(async(req,res) =>{
        const {id} = req.params
        const messages = await Message.find({recipient:id})
        res.json(messages)
    })

export default router
