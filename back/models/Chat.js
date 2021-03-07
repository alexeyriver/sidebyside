import mongoose from 'mongoose'


const Chat = mongoose.model('Chat',{
    user:{type:mongoose.SchemaTypes.ObjectId,ref:'User'},
    messages:[String]

})

export default Chat