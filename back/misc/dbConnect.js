import mongoose from 'mongoose'

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/sidebyside', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

export default dbConnect
