const RemedyModel = require("../models/RemedyModel")

const GetAllRemedies = async (req , res) => {
    const remedies = await RemedyModel.find();
    res.status(200).json({msg : "remedy found", data : remedies});
}

const userverification = async(req , res) => {
    const userdata = req.user;
    res.status(200).json({msg : "token verified" , userdata })
}

module.exports =  {GetAllRemedies , userverification};
