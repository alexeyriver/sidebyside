import mongoose from 'mongoose'



const Message = mongoose.model('Message',{
    author:{type:mongoose.SchemaTypes.Object,ref:'User'},
    recipient:{type:mongoose.SchemaTypes.ObjectId,ref:'User'},
    text:String,
    date:{type:Date,default:Date.now()},
    trip:{type:mongoose.SchemaTypes.Object,ref:'adCards'}

})
export default Message
