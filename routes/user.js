const router = require("express").Router();

// Get User List
router.get('/', (req, res)=>{    
    res.send("List user");
});

// search a user or user details
router.get('/find/:id', (req, res)=>{   
    res.send("User details " + req.params.id);
});

// Add new user
router.post('/', (req, res)=>{
    const userName = req.body.user_name;   
    res.send("post user name : " + userName);
});


// Update user
router.put('/:id', (req, res)=>{
    // const userName = req.body.user_name;   
    res.send("Put user");
});


module.exports = router;