import User from '../models/User.js';

export const usersHandler = (io, socket) => {
  const getUsers = async () => {
    const users = await User.find();
    io.in(socket.roomId).emit('users', users);
  };

  const addUser = async ({ login, userId }) => {
    const users = await User.findById(userId);

    await getUsers();
  };

  const deleteUser = () => {

  };

  socket.on('user:get', getUsers);
  socket.on('user:add', addUser);
  socket.on('user:leave', deleteUser);
};
