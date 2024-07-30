const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const RemedyModel = require("../models/RemedyModel") 

const userlogin = async (req , res) => {
    try {
        const {email , password} = req.body;
    const user = await userModel.findOne({email : email});
    if(!user) {
        return res.send("invalid Credntial")
    }

   const isMatch =  bcrypt.compare(password , user.password);
   if(!isMatch) {
    return res.send("invalid credentials")
   }
   const token = user.generateToken();
   res.status(200).json({msg : "login success" , token : token});
    } catch (error) {
        res.status(404).send(`Internal server side error ${error}`)  
    }
    
}

const usersignup = async (req , res) => {
   try {
    const {fullname , email , password , ph_no} = req.body;
   const existUser = await userModel.findOne({email : email});
   if(existUser) {
    return res.send("Email already Register")
   }
  const user = await userModel.create({fullname, email , password , ph_no})
  const token = user.generateToken();
  res.status(201).json({msg : "User Created" , token , userid: user._id.toString() })

} catch (error) {
    res.status(404).send(`Internal server side error ${error}`)  
   }
} 



const CreateRemedies  = async(req , res) => {
    try {
        const {title , description , ingredients , steps , ailments , effectiveness  } = req.body
        const Remedy = await RemedyModel.create({
        userId : req.userId,
        title,
        description,
        ingredients , 
        steps , 
        ailments , 
        effectiveness,
        image : req.file.buffer,

    }) 

    if(!Remedy) {
        return res.status(401).json({meg : "Failed To Create Remedy"})
    } 
    
    res.send("remedy created Success");

    } catch (error) {
        res.status(`somthing went wrong : ${error} `)
    }
} 



module.exports = {userlogin , usersignup , CreateRemedies }