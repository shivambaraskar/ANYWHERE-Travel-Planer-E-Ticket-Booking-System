let mongoose = require('mongoose');

let placeSchema= new mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

let placeData = mongoose.model('placeData', placeSchema)

module.exports = placeData