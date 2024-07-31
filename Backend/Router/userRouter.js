const express = require("express");
const router = express.Router();
const { userlogin , usersignup , CreateRemedies  , showMyRemedy } = require("../controller/user.controller");
const signupSchema = require("../validation/signupValidation")
const validate = require("../middleware/validate.middleware")
const TokenVerify = require("../middleware/TokenVerify.Middelware")
const upload = require("../utiles/multerConfig")


router.route("/login").post(userlogin);
router.route("/signup").post(validate(signupSchema) , usersignup);
router.route("/create").post(TokenVerify , upload.single("image") , CreateRemedies); 
router.route("/myremedy").get(TokenVerify , showMyRemedy); 

module.exports = router;
