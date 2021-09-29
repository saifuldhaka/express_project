const express = require("express"); 
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();


// cloud MongoDB
mongoose.connect(
        process.env.MONGO_URL
    )
    .then(
        () => console.log("DB connection successful")
    )
    .catch(
        (err)=> {
            console.log(err)
        }
    );

const routePrefix = process.env.ROUT_URL_PREFIX;    
const userRoute = require("./routs/user");
app.use("/api/user", userRoute); 


//app.use(routePrefix+"user", userRoute);    
// app.use("/api/user", userRoute); 

app.get('/test', (req, res) => {
    console.log('hello test index');    
});


app.listen(process.env.PORT|| 5000, () => {
    console.log(`Backend Server started on port`);
});
