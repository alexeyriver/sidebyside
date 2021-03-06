import mongoose from 'mongoose';

const feedSchema = new mongoose.Schema({
  trip: {
    type: Schema.Types.ObjectId, 
    ref: 'trips'
  },
  author: {
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  closeStatus: {
    type: Boolean,
    default: false
  }

});

export default mongoose.model('cards', feedSchema);
