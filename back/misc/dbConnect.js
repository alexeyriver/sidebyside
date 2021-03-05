import mongoose from 'mongoose'

const dbConnect = () => {
    mongoose.connect('mongodb://localhost/sidebyside', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

export default dbConnect
