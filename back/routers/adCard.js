import express from "express";
import AdCard from "../models/AdCard.js";
import User from "../models/User.js";
import moment from "moment";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    // console.log(Date.now());
    const cardsToRender = await AdCard.find({
      postedStatus: true,
    })
      .populate("participants")
      .populate("author");
    res.json(cardsToRender);
  })
  .post(async (req, res) => {
    // console.log(req.body);
    const coord = [req.body.coords[1], req.body.coords[0]];
    const querysToRender = await AdCard.find({
      startCoords: coord,
    }).populate("author");
    // console.log(querysToRender);

    res.json({ message: "Поездка создана", response: querysToRender });
  });

router.route("/new").post(async (req, res) => {
  console.log(req.body, "req-body");
  const {
    budget,
    country,
    startDate,
    endDate,
    tripInfo,
    email,
    startCoords,
    finalCoords,
    betweenCoords,
  } = req.body;
  const user = await User.findOne({ email });
  const testDate = moment(startDate, "DD-MM-YYYY");
  console.log(testDate, "test");

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
      finalCoords,
    });

    await newCard.save();
    res.json({ status: true });
  } catch (err) {
    res.json({ status: false });
  }

  // }
});

router
  .route("/:id")
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      const cardToDelete = await AdCard.findOneAndDelete({ _id: id });
      res.status(200).json({ message: "Поездка удалена" });
    } catch {
      res.json({ message: "Не найдена поездка с указанным id" });
    }
  })

  .put(async (req, res) => {
    try {
      const { startDate, endDate, budget, tripInfo, participants } = req.body;
      console.log(req.params, "======", req.body);
      console.log(req.params.id);
      const cardToEdit = await AdCard.findById({ _id: req.params.id });
      console.log(cardToEdit, "====");

      //  const cardToEdit = await AdCard.findByIdAndUpdate({ _id: req.params.id }, { budget, tripInfo, participants});

      // cardToEdit.startDate=startDate
      // cardToEdit.endDate=endDate

      cardToEdit.budget = budget;
      cardToEdit.tripInfo = tripInfo;
      // cardToEdit.participants=participants   // XUINYAAAAAAAAAAA

      console.log(">>>>>>", cardToEdit);
      await cardToEdit.save();

      if (cancelStatus) {
        await cardToEdit.update({
          postedStatus: false,
        });
      }

      res.status(200).json({ message: "Поездка отредактирована" });
    } catch (e) {
      res.json({ message: e });
    }
  });

router.route("/new").post(async (req, res) => {
  console.log(req.body, "req-body");
  const {
    budget,
    country,
    startDate,
    endDate,
    tripInfo,
    email,
    startCoords,
    finalCoords,
    betweenCoords,
  } = req.body;
  const user = await User.findOne({ email });
  const testDate = moment(startDate, "DD-MM-YYYY");
  console.log(testDate, "test");

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
      finalCoords,
    });

    await newCard.save();
    res.json({ body: req.body });
  } catch (err) {
    res.json({
      message:
        "поездка с указанными параметрами уже существует, найдите карточку поездки через личный кабинет и отредактируйте ее",
    });
  }
});

export default router;
