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
router.route('/')
  .get((req, res) => {
    res.send('signin')
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      // Проверка пароля
      const passwordResult = bcrypt.compareSync(password, user.password);
      if (passwordResult) {
        res.status(200).json({ user: user, success: true });
      } else {
        res.status(401).json({
          message: 'Пароли не совпали',
        });
      }
    } else {
      res.status(404).json({
        message: 'Пользователь не найден',
      });
    }
  });

export default router;
