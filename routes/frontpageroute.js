const express= require('express')

//router object
const router=express.Router();

// const contactController=require("../controllers/contactController")
// const auth=require("../middleware/auth")

router.get('/',(req,res)=>{
    res.render("frontpage")
  })

  router.get('/About',(req,res)=>{
    res.render("About")
  })

  router.get('/Contact',(req,res)=>{
    res.render("Contact")
  })

  router.get('/AirborneLidar',(req,res)=>{
    res.render("AirborneLidar")
  })
  router.get('/DGPSSurvey',(req,res)=>{
    res.render("DGPSSurvey")
  })


  router.get('/error1',(req,res)=>{
    res.render("error1")
  })


  router.get('/successfull',(req,res)=>{
    res.render("successfull")
  })
module.exports=router;