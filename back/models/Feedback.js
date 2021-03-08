import mongoose from 'mongoose';

const feedSchema = new mongoose.Schema({
  adCard: {
    type: Schema.Types.ObjectId,
    ref: 'adCards'
  },
  feedAuthor: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: String
  // closeStatus: {
  //   type: Boolean,
  //   default: false
  // }
});

export default mongoose.model('feedbacks', feedSchema);
