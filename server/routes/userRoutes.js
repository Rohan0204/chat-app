const { registerUser } = require("../controllers/userControllers");
const router = require("express").Router();



router.post("/register", registerUser);



module.exports = router;