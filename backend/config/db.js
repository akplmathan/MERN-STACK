const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/MovieStore';

const connectDB=async()=>{
    try {
        await mongoose.connect(url);
        console.log("Server is Connected To mongoDB");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connectDB;