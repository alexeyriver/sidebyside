import express from 'express';
import AdCard from '../models/AdCard.js';
import User from '../models/User.js';
import moment from "moment";

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    console.log(Date.now());
    const cardsToRender = await AdCard.find({
      postedStatus: true,
    }).populate('participants').populate('author');
    res.json(cardsToRender);
  })
  .post(async (req, res) => {
    console.log(req.body);
    const coord = [req.body.coords[1], req.body.coords[0]]
    const querysToRender = await AdCard.find({
      startCoords: coord

    }).populate('author');
    console.log(querysToRender);

    res.json({ message: 'Поездка создана', response: querysToRender });

  })

router.route('/new')
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

    // }
  });

router.route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      const cardToDelete = await AdCard.findOneAndDelete({ _id: id })
      res.status(200).json({ message: 'Поездка удалена' });
    } catch {
      res.json({ message: "Не найдена поездка с указанным id" })
    }
  })

  .put(async (req, res) => {
    try {
      const { id, startDate, endDate, budget, cancelStatus, tripInfo } = req.params;

      const cardToEdit = await AdCard.findOne({ _id: id })
      await cardToEdit.update({
        id,
        startDate,
        endDate,
        budget,
        cancelStatus,  //отменить поездку и далее поменять статус размещения
        tripInfo
      })

      if (cancelStatus) {
        await cardToEdit.update({
          postedStatus: false
        })
      }

      res.status(200).json({ message: 'Поездка отредактирована' });
    } catch {
      res.json({ message: "Не найдена поездка с указанным id" })
    }
  })














export default router;
