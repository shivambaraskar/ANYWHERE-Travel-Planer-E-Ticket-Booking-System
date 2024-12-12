let mongoose = require('mongoose');

let cartSchema= new mongoose.Schema({
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
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
})

let cartData = mongoose.model('cartData', cartSchema)

module.exports = cartData