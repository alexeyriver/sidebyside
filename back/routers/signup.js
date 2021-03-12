import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

const maxAge = 3 * 24 * 60 * 60;

// Функция для создания токена
const createToken = (id) => {
  return jwt.sign({ id }, 'react', {
    expiresIn: maxAge,
  });
};

//проверка адреса
router.route('/')
  .get((req, res) => {
    res.send('signup')
  })

  .post(async (req, res) => {
    const {name, email, password } = req.body;
    const candidat = await User.findOne({ email });
    if (candidat) {
      res.json({
        message: 'Такой пользователь уже есть',
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password, salt),
      });
      await user.save();
      const token = createToken(user._id);
      res.status(201).json({ user: user, token, success: true });
    }
  });

export default router;
