import mongoose from 'mongoose';
// import {Schema} from 'mongoose'

const adCardSchema = new mongoose.Schema({
  startDate: String,
  endDate: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  budget: Number,
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  postedStatus: {
    type: Boolean,
    default: true
  },
  agreedStatus: {
    type: Boolean,
    default: false
  },
  cancelStatus: {
    type: Boolean,
    default: false
  },

  tripInfo: String ,
  startCoords: [],
  finalCoords: [],
  betweenCoords: []
});



export default mongoose.model('adCards', adCardSchema);
