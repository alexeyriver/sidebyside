import express from 'express';
import AdCard from '../models/AdCard.js';
// import User from '../models/User.js';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('newtrip')


  })
  .post(async (req, res) => {
    const { budget, startDate, endDate, tripInfo, email } = req.body;
    const user = await User.findOne({email})

    const cardToFind = await AdCard.findOne({ 
      author: email, 
      country, 
      budget,
      startDate, 
      endDate
    });

    if (!cardToFind) {
      try {
        const newCard = new AdCard({
          author: email,
          country,
          budget,
          startDate,
          endDate,
          tripInfo,
        });
  
        await newCard.save()
        res.json()
  
      } catch (err) {
        res.json({ message: "поездка с указанными параметрами уже существует, найдите карточку поездки через личный кабинет и отредактируйте ее" })
      }

    }
  });

export default router;
