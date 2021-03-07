import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

export const messageHandler = (io, socket) => {
  const getMessages = async (data) => {
    const messages = await Chat.find(chatID).populate('messages');
    io.in(socket.chatID).emit('messages', messages);
  };

  const addMessage = async (data) => {
    console.log(data)
    const {chatID,userID,messageText} = data

    console.log(chatID,userID,messageText)
    const chat = await Chat.findById(chatID)
    chat.messages.push(messageText)
    await chat.save()
    await getMessages();
  };

  const deleteMessage = async (id) => {
    await Message.findByIdAndDelete(id);
    // await getMessages();
  };

  // socket.on('message:get', getMessages);
  socket.on('message:add', addMessage);
  socket.on('message:remove', deleteMessage);
};
