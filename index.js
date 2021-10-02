const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

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
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
// const { use } = require("./routes/user");

app.use(routePrefix + "auth", authRoute);
app.use(routePrefix + "users", userRoute);


app.listen(process.env.PORT|| 5000, () => {
    console.log("Backend Server started on port " + process.env.PORT);
});
