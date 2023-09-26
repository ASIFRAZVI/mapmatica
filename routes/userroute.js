const express= require('express')

//router object
const router=express.Router();

//signup requiring controller
const {loginController, signupController}=require("../controllers/signupController")

//requiring auth middleware
const auth=require("../middleware/auth")




//login part rout
router.post('/login',loginController)

//registration part
router.post('/signupajfsfdhsjfndafndnvnmcvzmnfeuwuqerenbmdafnbfbnbnvbcnvcnzvncnvncvncnbvnbvzvvcnvncznvcnznvncxnvrjahhjrthrwhghgfshjfjkgkjfskjlgkjlgkjlflkjgkjdskjgkgkjfgjyetyytewuiureiotyitiyioeittewyjkfnvcnvncgfjhghjfhgfgjfgnmvnmvcnxfbnbcasasifrazaindexsignup', signupController)




//extra routers
router.get('/signupajfsfdhsjfndafndnvnmcvzmnfeuwuqerenbmdafnbfbnbnvbcnvcnzvncnvncvncnbvnbvzvvcnvncznvcnznvncxnvrjahhjrthrwhghgfshjfjkgkjfskjlgkjlgkjlflkjgkjdskjgkgkjfgjyetyytewuiureiotyitiyioeittewyjkfnvcnvncgfjhghjfhgfgjfgnmvnmvcnxfbnbcasasifrazaindexsignup',(req,res)=>{
  res.render("signup")
})

router.get('/login',(req,res)=>{
  res.render("login")
})
 
router.get('/dashboard',auth,(req,res)=>{
  res.render("dashboard")
})

  
//logout funtion
    router.get('/logout',auth ,async(req,res)=>{
      try{
      //remove from db one user token or single out
      //req.user.tokens=req.user.tokens.filter((currenttoken)=>{
          // return currenttoken.token !== req.token;
      //})
    
      //logout from all devices
      req.user.tokens=[];

      //clear cookies
        res.clearCookie("jwt")
        await req.user.save();
        res.render("login")
      }catch{
        res.send("your not a logged-in")
      }
    })

module.exports=router;