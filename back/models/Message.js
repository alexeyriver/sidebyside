import mongoose from 'mongoose'


const Message = mongoose.model('Message',{
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:'Chat'},
    text:String,
    date:{type:Date,default:Date.now()}
})
export default Message