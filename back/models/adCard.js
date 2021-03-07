import mongoose from 'mongoose';

const adCardSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  budget: Number,
  postedStatus: {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    ],
    type: Boolean,
    default: true
  },
  agreedStatus: {
    type: Boolean,
    default: false
  },

  tripInfo: String 
});

export default mongoose.model('adCards', cardSchema);
