require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const dbconnet = require("./utiles/DB");
const userRouter = require("./Router/userRouter");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
    origin: 'http://localhost:5173',
    methods : "GET, POST, PUT, DELETE ",
    credential : true
  }
  app.use(cors(corsOptions)) 
dbconnet()





app.use("/api/user" , userRouter)



app.listen(3000 , () => {
    console.log("server is listning")
})