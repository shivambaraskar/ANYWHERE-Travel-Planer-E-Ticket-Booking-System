let express = require('express');
let CartData = require('../modules/cart');
let router = express.Router();
let jwt=require('jsonwebtoken');

router.post ('/cart', async (req, res) =>{
    let place = req.body;
    try{
        let placeData = new CartData({
                id: place.id,
                name: place.name,
                location: place.location,
                price: place.price,
                image: place.image,
                quantity: place.quantity
            });
            await placeData.save();
            let data=JSON.stringify(placeData.id)
            let token = jwt.sign(data,'EFBWUYFBUWBFUWVYFBUWE')
            res.send({token, placeData, message:'cart updated'})
            console.log(placeData, "Place ticket added to cart")
        }
    catch(err){
        console.log(err,'error Occured');
        res.status(402).send('error')
    }
    });

    router.post ('/cartItem', async (req, res) =>{
        let placeData = req.body;
        try{
            let success = await CartData.updateOne({'id': placeData.id}, {$set:{'quantity': placeData.quantity}});
                if(success){
                    console.log(placeData, "Place ticket quantity updated")
                    res.send('Quantity updated')
                }else{
                    console.log('Place ticket not found');
                }
            }
        catch(err){
            console.log('error Occured');
            res.status(402).send('error')
        }
        });

    router.get ('/cart', async (req, res) =>{
        try{
            let data = await CartData.find();
            if(data){
                res.send(data);
            }
            else{
             res.status(201).send('Cart is empty');
            }
         }
         catch{
             res.status(404).send("Unable to get cart data");
         }
    });

    router.delete('/cart', async (req, res)=>{
        try{
            let status = await CartData.deleteOne({id: req.query.id});
            if(status){
                res.send("Place removed from cart")
            }
            else{
                res.status(201).send('Unable to delete')
            }
        }
        catch{
            res.status(404).send('Error : Unable to delete')
        }
    });

  module.exports = router