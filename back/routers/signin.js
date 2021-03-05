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
router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (user) {
    // Проверка пароля
    const passwordResult = bcrypt.compareSync(password, user.password);
    if (passwordResult) {
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user, token, success: true });
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
