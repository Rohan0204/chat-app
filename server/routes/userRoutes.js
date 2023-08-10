const { registerUser, loginUser } = require("../controllers/userControllers");
const router = require("express").Router();



router.post("/register", registerUser);
router.get('/login', loginUser)



module.exports = router;