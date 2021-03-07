import mongoose from 'mongoose'


const Chat = mongoose.model('Chat',{
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    messages:[{type:mongoose.Schema.Types.ObjectId,ref:'Message'}]

})

export default Chat