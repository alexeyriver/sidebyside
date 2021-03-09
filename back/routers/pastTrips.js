import express from 'express';
import AdCard from '../models/AdCard.js';
import User from '../models/User.js';
import moment from "moment";

router.route('/:id')
  .post(async (req, res) => {
    console.log(req.body, 'req-body');
    
    const { budget, country, startDate, endDate, tripInfo, email, startCoords, finalCoords, betweenCoords } = req.body;
    const user = await User.findOne({ email });
    const testDate = moment(startDate, "DD-MM-YYYY")
    console.log(testDate, 'test')

    try {
      const newCard = new AdCard({
        author: user,
        country,
        budget,
        startDate: moment(startDate, "DD-MM-YYYY"),
        endDate: moment(endDate, "DD-MM-YYYY"),
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

  });
