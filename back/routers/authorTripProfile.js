import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.route("/:id")
  .get(async (req, res) => {
    const { id } = req.params
    try {
      const userToFind = await User.findOne({ _id: id })
        .populate("feedback")
      res.json(userToFind);
    } catch (err) {
      res.json({ message: err })
    }
  })

export default router
