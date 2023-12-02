const { User } = require("../models/userModel");
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res, next) => {

    const { username, email, password } = req.body;

    //CHECKING IF EMAIL ALREADY EXIST OR NOT 
    const userEmailCheck = await User.findOne({ email }).exec();
    if (userEmailCheck) {
        return res.json({ message: "Email Already Exist ", status: false })
    }

    // CHECKING USERNAME ALREADY TAKEN OR NOT 

    const usernameCheck = await User.findOne({ username }).exec();
    if (usernameCheck) {
        return res.json({ message: "Username Already Taken ", status: false })
    }

    //HASH THE PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password is : ", hashPassword);

    //SAVING THE USER
    let user = new User({
        username: username,
        password: hashPassword,
        email: email
    })

    user.save();
    res.json(user);
    next();
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    // CHECKING USER EXIST OR NOT 
    const user = await User.findOne({ email }).exec();
    if (!user) {
        return res.json({ message: "Email not Found ", status: false }).status(404);
    }

    //COMPARING THE PASSWORD WITH THE HASHPASSWORD IN DB
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {

        const responseUser = {
            username: user.username,
            id: user._id
        }
        res.json(responseUser).status(200);
    }

    next();
}