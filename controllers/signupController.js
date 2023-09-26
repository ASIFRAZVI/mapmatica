const dotenv=require('dotenv')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

dotenv.config()

const signup=require('../models/signupmodel')



//signup rout controller fn
const signupController=async (req,res)=> {
    try{
      const password=req.body.password;
      const usersignupSchema= new signup({
        name:req.body.name,
        email:req.body.email,
        phnumber:req.body.phnumber,
        password:password
      })
      const token=await usersignupSchema.generateauthtoken();
   // store token to cookies // syntax res.cookie(name, value, [option])
   res.cookie("jwt", token,{
    expires:new Date(Date.now()+604800000),
    httpOnly:true,
    //secure:true,
  });

     const registered = await usersignupSchema.save()
      res.redirect("login")
    }catch(error){
      res.redirect("/error1")
    }
  };

// login rout controller fn
const loginController=async(req,res)=>{
    try{
      const email=req.body.email;
      const password=req.body.password;
  
     const registeredemail=await signup.findOne({email:email});

  // hash pasword comparing
  const isMatch=await bcrypt.compare(password, registeredemail.password)

  //jwt token fn only one line for login
  const token=await registeredemail.generateauthtoken();

  // store token to cookies // syntax res.cookie(name, value, [option])
  res.cookie("jwt", token,{
    expires:new Date(Date.now()+604800000),
    httpOnly:true,
    //secure:true,
  });


   if(isMatch){
      res.redirect("/dashboard");
  }else{
        res.redirect("/error1")
     }
    }catch(error){
      res.redirect("/error1")
    }
  }


module.exports={loginController, signupController}