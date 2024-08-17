const RemedyModel = require("../models/RemedyModel")
const UserModel = require("../models/userModel") 
const ReviewModel = require("../models/ReviewModel");

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
           const owner  = await UserModel.findOne({_id : remedy.userId}).select("-password");
           
           if(!owner) {
            res.status(200).json({msg : "remedy found success", remedydetail : remedy});
           }
          
        res.status(200).json({msg : "remedy found success", remedydetail : remedy , ownerdata : owner});
     } catch (error) {
        res.status(500).json({msg : "Internal server error" , err : error})
     }
} 

const remedyReview = async (req , res) => {
   try {

      const rmid =  req.header("remedyId")
      const Review =  await ReviewModel.create({comment : req.body.comment , userId : req.userId , RemedyId : rmid });
      console.log(req.body.comment)
      console.log(Review)
      if(!Review) return res.send("failed");
      res.json({msg : "ok"})
   } catch (error) {
      res.status(404).send("comment Failed");
   }
} 

module.exports =  {GetAllRemedies , userverification , remedydetail , remedyReview};
