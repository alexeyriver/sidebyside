import express from 'express';
import AdCard from '../models/AdCard.js';
import User from '../models/User.js';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('newtrip')
    // const cardsToRender = await AdCard.find({postedStatus: true});


  })

router.route('/new')
  .post(async (req, res) => {
    console.log(req.body, 'req-body');
    const { budget, country, startDate, endDate, tripInfo, email } = req.body;
    const user = await User.findOne({ email });
    // console.log(user);
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
        startDate: Date(startDate),
        endDate: Date(endDate),
        tripInfo,
        participants: user
      });

      await newCard.save()
      res.json({ body: req.body })

    } catch (err) {
      res.json({ message: "поездка с указанными параметрами уже существует, найдите карточку поездки через личный кабинет и отредактируйте ее" })
    }

    // }
  });

export default router;
