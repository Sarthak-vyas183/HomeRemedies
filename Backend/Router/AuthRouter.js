const express = require("express");
const router = express.Router(); 

const { GetAllRemedies } = require('../controller/Auth.Controller'); 


router.route("/remedies").get(GetAllRemedies);

module.exports = router;
