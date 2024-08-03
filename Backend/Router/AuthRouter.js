const express = require("express");
const router = express.Router(); 
const TokenVerify = require("../middleware/TokenVerify.Middelware") ;
const { GetAllRemedies , userverification , remedydetail } = require('../controller/Auth.Controller'); 


router.route("/remedies").get(GetAllRemedies);
router.route("/userverification").get(TokenVerify , userverification);
router.route("/remedydetail/:id").get(remedydetail);

module.exports = router;
