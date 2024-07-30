const RemedyModel = require("../models/RemedyModel")

const GetAllRemedies = async (req , res) => {
    const remedies = await RemedyModel.find();
    res.status(200).json({msg : "remedy found", data : remedies});
}

module.exports =  {GetAllRemedies};
