const express = require("express");
const router = express.Router(); 
const TokenVerify = require("../middleware/TokenVerify.Middelware") ;
const { GetAllRemedies , userverification } = require('../controller/Auth.Controller'); 


router.route("/remedies").get(GetAllRemedies);
router.route("/userverification").get(TokenVerify , userverification);

module.exports = router;
