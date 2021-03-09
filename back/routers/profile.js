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

.post(upload.single('file'),async (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        try {
            const user = await User.findByIdAndUpdate({ _id: id }, { name, email,file:`http://localhost:4000/public/${req.file.filename}` });
            if (user) {
                res.status(200).json(user)
            } else {
                throw Error('Такая почта уже зарегистрирована!');
            }
        } catch (err) {
            res.status(501).end();
        }
    });


export default router