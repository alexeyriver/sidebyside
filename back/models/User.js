import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  about: String,
  rating: Number,
  feedback: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feedbacks'
  }],
  file:{type:String,default:'http://cdn.onlinewebfonts.com/svg/img_258083.png'}   ,
  messages:[{type:mongoose.SchemaTypes.ObjectId,ref:'Message'}]
  
});

export default mongoose.model('users', userSchema);

