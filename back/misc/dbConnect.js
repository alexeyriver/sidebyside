import mongoose from 'mongoose'

const dbConnect = () => {
    // mongoose.connect('mongodb://localhost:27017/sidebyside', {
      // mongoose.connect('mongodb+srv://admin:admin@cluster0.mv0ak.mongodb.net/test', {
      mongoose.connect(process.env.BACK_URL_DB, {

      
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    });
};

export default dbConnect
