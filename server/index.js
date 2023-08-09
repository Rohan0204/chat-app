const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/chat-app')
    .then(() => console.log("Connected to Database ... "))
    .catch(err => console.log(err))


//Creating the user Schema

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// defining Model

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    console.log("Home Routes is operational");
    res.send("Get request called")
});

app.post('/user', (req, res) => {
    console.log(req.body);
    let data = req.body;
    res.send(data);

    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    user.save();



});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening to port ${port}`);
})
