const router = require("express").Router();

router.get('user-test', (req, res)=>{
    // res.send("hello user");

    console.log('hi user test');
});
module.exports = router; 