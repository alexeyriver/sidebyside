import mongoose from 'mongoose';

const adCardSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  postedStatus: {
    type: Boolean,
    default: true
  },
  performedStatus: {
    type: Boolean,
    default: false
  }

});

export default mongoose.model('adCards', cardSchema);
