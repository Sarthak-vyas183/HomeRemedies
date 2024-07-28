const express = require("express");
const router = express.Router();
const { userlogin , usersignup } = require("../controller/user.controller");
const signupSchema = require("../validation/signupValidation")
const validate = require("../middleware/validate.middleware")
router.route("/login").post(userlogin);
router.route("/signup").post(validate(signupSchema) , usersignup);

module.exports = router;
