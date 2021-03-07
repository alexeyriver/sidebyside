import express from 'express';
import AdCard from '../models/AdCard.js';
import User from '../models/User.js';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('newtrip')


  })
  .post(async (req, res) => {
    console.log(req.body);
    const { budget, country, startDate, endDate, tripInfo, email } = req.body;
    const user = await User.findOne({ email });

    // const cardToFind = await AdCard.find().populate('author');
    // let resultArray = cardToFind.filter((el) =>
    //   el.author.email == email)


    // if (!cardToFind) {
    try {
      // const cardToFind = await AdCard.find().populate('author');


      const newCard = new AdCard({

        author: user,
        country,
        budget,
        startDate,
        endDate,
        tripInfo,
        participants: user
      });

      await newCard.save()
      res.json()

    } catch (err) {
      res.json({ message: "поездка с указанными параметрами уже существует, найдите карточку поездки через личный кабинет и отредактируйте ее" })
    }

    // }
  });

export default router;
