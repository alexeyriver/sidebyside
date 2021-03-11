import express from 'express'
import Message from "../models/Message.js";
import User from "../models/User.js";
import AdCard from "../models/AdCard.js";


const router = express.Router()


router.route('/')
  .put(async (req, res) => {
    const { id } = req.body
    const message = await Message.findOne({ _id: id })
    const author = await User.findOne({ _id: message.author._id })
    const trip = await AdCard.findOne({ _id: message.trip })     /// _id:message.trip._id
    trip.participants.push(author)
    await trip.save()
    await Message.findByIdAndDelete({ _id: id })
    const messages2 = await Message.find({ recipient: message.recipient })
    res.json(messages2)
  })

  .post(async (req, res) => {
    const { text, author, recipient, trip } = req.body
    const message = await Message.create({
      author: author,
      recipient: recipient,
      text: text,
      trip: trip
    })
    const user = await User.findOne({ _id: author._id })
    user.messages.push(message)
    await user.save()
    res.json(message)
  })


router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params
    const messages = await Message.find({ recipient: id })
    res.json(messages)
  })

router.route('/decline/:id')
  .get(async (req, res) => {
    const { id } = req.params
    const messages = await Message.findOne({ _id: id })
    await Message.findByIdAndDelete({ _id: id })
    const messages2 = await Message.find({ recipient: messages.recipient })
    res.json(messages2)
  })



export default router
