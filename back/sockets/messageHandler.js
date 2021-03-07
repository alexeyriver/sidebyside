import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

export const messageHandler = (io, socket) => {
  const getMessages = async () => {
    const messages = await Chat.find().populate('messages');
    console.log(messages);
    io.in(socket.roomId).emit('messages', messages);
  };

  const addMessage = async (message) => {
    await Chat.create({
      messages: message,
    });

    await getMessages();
  };

  const deleteMessage = async (id) => {
    await Message.findByIdAndDelete(id);
    await getMessages();
  };

  socket.on('message:get', getMessages);
  socket.on('message:add', addMessage);
  socket.on('message:remove', deleteMessage);
};
