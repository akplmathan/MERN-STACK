const mongoose = require('mongoose');

const VijayModel = mongoose.Schema({
    movie:{
        type:String,
        required:true,
        unique :true
    },
    director:{
        type:String,
        required:true
    },
    musicDirector:{
        type:String,

    },
    releaseYear :{
        type:Number,
        required:true
    } 
},{ timestamps: true });

const Vijay = mongoose.model('VijayMovies',VijayModel);

module.exports  = Vijay;