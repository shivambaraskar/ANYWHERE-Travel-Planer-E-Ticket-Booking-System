let express = require('express');
let PlaceData = require('../modules/placeData');
let router = express.Router();

router.post ('/register-place', async (req, res) =>{
    let placeInfo = req.body;
    try{
        let placeData = new PlaceData({
            id: (placeInfo.name.toLowerCase()).replaceAll(" ", "-"),
            name: placeInfo.name,
            location: placeInfo.location,
            rating: placeInfo.rating,
            price: placeInfo.price,
            image: placeInfo.image,
            description: placeInfo.description
            });
            await placeData.save();
            console.log(placeData.id, "Place information saved to database")
            res.send({message:'new place added'})
        }
    catch(err){
        console.log(err,'error Occured');
        res.status(402).send('error')
    }
    });

  module.exports = router