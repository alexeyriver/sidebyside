import mongoose from 'mongoose'


const Message = mongoose.model('Message',{
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    recipient:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    text:String,
    date:{type:Date,default:Date.now()}
})
export default Message