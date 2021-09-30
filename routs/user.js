// const router = require("express").Router();
const express = require("express"); 
const router = express.Router(); 

router.get('user-test', (req, res)=>{
    res.send("hello user.js");

    // console.log('hi user test');
});
module.exports = router; 