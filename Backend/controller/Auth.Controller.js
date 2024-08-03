const RemedyModel = require("../models/RemedyModel")

const GetAllRemedies = async (req , res) => {
    const remedies = await RemedyModel.find({isVerified : true});
    res.status(200).json({msg : "remedy found", data : remedies});
}

const userverification = async(req , res) => {
    const userdata = req.user;
    res.status(200).json({msg : "token verified" , userdata })
}

const remedydetail = async(req , res) => {
     try {
        const  remedyId = req.params.id
         const remedy = await RemedyModel.findOne({_id : remedyId});
           if(!remedy) {
             return res.status(404).json({msg : "remedyDetail Not found" });
           }
          
        res.status(200).json({msg : "remedy found success", remedydetail : remedy});
     } catch (error) {
        res.status(500).json({msg : "Internal server error" , err : error})
     }
}
module.exports =  {GetAllRemedies , userverification , remedydetail};
