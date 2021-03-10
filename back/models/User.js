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
  rating: Number,
  feedback: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'feedbacks'
  }],
  file:Stringб
  
});

export default mongoose.model('users', userSchema);
