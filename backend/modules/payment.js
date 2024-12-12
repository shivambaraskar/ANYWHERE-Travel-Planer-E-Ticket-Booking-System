let mongoose = require('mongoose')

let paymentSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    amount:{
        type:Number
    },
    allplaces:{
        type:Object
    }
}) 

let payment = mongoose.model('payment', paymentSchema)

module.exports = payment