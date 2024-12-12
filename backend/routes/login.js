let express = require('express');
let User = require('../modules/users');
let router = express.Router();
let Bcrypt=require('bcrypt');
let jwt=require('jsonwebtoken');

router.post('/login', async (req, res)=>{
    let user = req.body
    try{
      let thisUser = await User.findOne({email: user.username}) //{mobile: (user.username).toNumber()}]

      if(thisUser){
        let thisPassword = await Bcrypt.compare(user.password, thisUser.password)

        if(thisPassword){
          let data=JSON.stringify(thisUser.name)
          let token = jwt.sign(data,'EFBWUYFBUWBFUWVYFBUWE')
          res.send({token, thisUser, message:'user logged in successfully'})
        }
        else{
          res.status(201).send({message:'password mismatched'})
        }
      }
      else{
        res.status(404).send({message:'login failed: user not found'})
      }
    }catch(err){
      res.status(404).send('server error')
    }
  })

  module.exports = router