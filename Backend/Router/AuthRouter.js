const express = require("express");
const router = express.Router(); 
const TokenVerify = require("../middleware/TokenVerify.Middelware") ;
const { GetAllRemedies , userverification , remedydetail , remedyReview} = require('../controller/Auth.Controller'); 


router.route("/remedies").get(GetAllRemedies);
router.route("/userverification").get(TokenVerify , userverification);
router.route("/remedydetail/:id").get(remedydetail);
router.route("/comment").post(TokenVerify ,remedyReview);

module.exports = router;
