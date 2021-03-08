import express from 'express';
import AdCard from '../models/AdCard.js';
import User from '../models/User.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    console.log(Date.now());
    const cardsToRender = await AdCard.find({
      postedStatus: true,
      // startDate: { $lt: Date.now() }
    }).populate('participants');
    console.log(cardsToRender);

    res.json(cardsToRender);

  })
  .post(async (req, res) => {
    console.log(req.body);
    const coord = [req.body.coords[1], req.body.coords[0]]
    const querysToRender = await AdCard.find({
      startCoords: coord

    }).populate('author');
    console.log(querysToRender);

    res.json({ response: querysToRender });

  })

router.route('/new')
  .post(async (req, res) => {
    console.log(req.body, 'req-body');
    const { budget, country, startDate, endDate, tripInfo, email, startCoords, finalCoords, betweenCoords } = req.body;
    const user = await User.findOne({ email });
    console.log(Date(startDate));
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
        participants: user,
        betweenCoords,
        startCoords,
        finalCoords
      });

      await newCard.save()
      res.json({ body: req.body })

    } catch (err) {
      res.json({ message: "поездка с указанными параметрами уже существует, найдите карточку поездки через личный кабинет и отредактируйте ее" })
    }

    // }
  });














export default router;
