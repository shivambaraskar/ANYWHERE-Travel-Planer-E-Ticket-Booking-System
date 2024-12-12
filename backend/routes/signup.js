let express = require('express');
let User = require('../modules/users');
let router = express.Router();
let Bcrypt=require('bcrypt');

router.post('/signup', async(req, res) => {
    let user=req.body;
    console.log(user,'user data without encryption')
  
    let Email = await User.findOne({email:user.email})
    let Mobile = await User.findOne({mobile:user.number})

    if(Email || Mobile){
      res.status('201').send('user already exists')
    }
    else{
      user.password =  await Bcrypt.hash(user.password, 10)
      console.log(user,"password encrypted")
  
      let users = new User({
        name: user.username,
        email: user.email.toLowerCase(),
        mobile: user.number,
        password:user.password
        })
        await users.save();
        res.send({message:'new user created'})
    }
  });

  module.exports = router
