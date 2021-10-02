const router = require("express").Router();
const User = require("../models/User");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register User
router.post("/register", async (req, res)=>{

    if(req.body.user_name == ''){
        res.status(400).json('User Name is required');
    }
    if(req.body.email == ''){
        res.status(400).json('User Email is required');
    }
    if(req.body.password == ''){
        res.status(400).json('User Password is required');
    }
    
    const newUser = new User({
        userName: req.body.user_name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString(),
      });

   try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
   }catch(err){
    res.status(500).json(err);
   }
   
});

// Login

router.post('/login', (req, res) => {
    try{
        const user = await User.findOne({
            userName: req.body.user_name
        });

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword != hashedPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});




module.exports = router;