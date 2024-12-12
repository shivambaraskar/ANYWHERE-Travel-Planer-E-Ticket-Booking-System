const express = require('express');
const router = express.Router();
const stripe = require('stripe')('STRIPE-PAYMENT-API');
const Payment = require('../modules/payment');

router.post("/payment", async (req, res) => {
  const cartItem = req.body;
  console.log(req.body);

  // let username = (cartItem) ? cartItem[0].username : null;
  // let useremail = (cartItem) ? cartItem[0].useremail : null;
  // let subtotal = (cartItem) ? cartItem[0].subtotal : null;

  const cartPlaceData = cartItem.map((place) => ({place_data:{
            name: place.name,
            unit_amount: place.price
        }}));
        
  const session = await stripe.checkout.sessions.create({
    // customer: username,
    // line_items: cartPlaceData,
    currency: "inr",
    // amount_total: 1000,
    mode: "payment",
    payment_method_types: ["card"],
    success_url: "http://localhost:3000/sucess",
    cancel_url: "http://localhost:3000/cancel",
    });
    try{
        let paymentData = new Payment({
                // username: username,
                // email: useremail,
                // session_id: session.id,
                // amount: subtotal,
                allplaces: cartPlaceData
            });
            await paymentData.save();
            res.json({ id: session.id });
            console.log(paymentData, "Payment information updated to database")
            res.send({message:'Payment data saved'})
        }
    catch(err){
        console.log(err,'error occured');
        res.status(402).send('Error : Failed to store order')
    }
});

module.exports = router;