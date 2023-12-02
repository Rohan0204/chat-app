const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require("mongoose")
const cors = require('cors')
const userRouter = require('./routes/userRoutes')


//BODY PARSERS
app.use(express.json());
app.use(cors());
app.use('/api/auth/user', userRouter)



//MONGOOSE DB CONNECTION 
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Database ... "))
    .catch(err => console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening to port ${port}`);
})
