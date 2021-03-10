import express from 'express'
import User from "../models/User.js";
import multer from "multer";

const router = express.Router()

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName);
    },
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
});


router.route('/:id')
    .get(async (req, res) => {
        const {id} = req.params;
        const user = await User.findOne({_id: id})
        res.json(user)
    })


    .put(async (req, res) => {
        const {id} = req.params;
        const {name, email} = req.body;
        const user = await User.findById({_id: id})
        user.name = name
        user.email = email
        await user.save()
        res.json(user)
    })


    .post(upload.single('file'), async (req, res) => {
        const {id} = req.params
        const user = await User.findById({_id: id})
        user.file = `http://localhost:4000/public/${req.file.filename}`
        await user.save()
        res.json(user)
    });


export default router
