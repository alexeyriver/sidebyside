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
    res.send('OK')
  })

  .post(async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const candidat = await User.findOne({ email: email });
    if (candidat) {
      res.status(409).json({
        message: 'Такой пользователь уже есть',
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const user = new User({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, salt),
      });
      await user.save();
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user, token, success: true });
    }
  });

export default router;
