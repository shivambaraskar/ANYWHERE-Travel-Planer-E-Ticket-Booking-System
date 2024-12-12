const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const port = 4012
const host = 'localhost'
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

let signuproute = require('./routes/signup')
let loginroute = require('./routes/login')
let addplaceroute = require('./routes/addPlace')
let cartroute = require('./routes/cart')
let quantroute = require('./routes/cart')
let paymentroute = require('./routes/payment')

mongoose.connect('mongodb://127.0.0.1:27017/anywhere').then(()=>{
    console.log('database connected');
}).catch(err => console.log("unable to connect"));

app.use('/api', signuproute)
app.use('/api', loginroute)
app.use('/api', addplaceroute)
app.use('/api', cartroute)
app.use('/api', quantroute)
app.use('/api', paymentroute)

app.listen(port, host, ()=> {
    console.log(`server active on ${port}`);
})
