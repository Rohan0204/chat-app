const { User } = require("../models/userModel");

exports.registerUser = (req, res, next) => {
    console.log(req.body);
    let data = req.body;
    res.send(data);

    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    user.save();
    next();
}