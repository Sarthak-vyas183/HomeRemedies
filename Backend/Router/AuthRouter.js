const express = require("express");
const router = express.Router(); 
const TokenVerify = require("../middleware/TokenVerify.Middelware") ;
const { GetAllRemedies , userverification , remedydetail , remedyReview , showComments , showCommenter} = require('../controller/Auth.Controller'); 


router.route("/remedies").get(GetAllRemedies);
router.route("/userverification").get(TokenVerify , userverification);
router.route("/remedydetail/:id").get(remedydetail);
router.route("/comment").post(TokenVerify ,remedyReview);
router.route("/showComments").post(showComments);
router.route("/showcommentuser").post(showCommenter);
module.exports = router;
