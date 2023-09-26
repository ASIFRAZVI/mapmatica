const mongoose=require("mongoose");

//signup schema
const clientSchema=new mongoose.Schema({
    
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phnumber:{
        type:Number,
        required:true,
        unique:true
    },
    message: {
        type:String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }


})


//creating collection
const client= new mongoose.model("client", clientSchema);

module.exports=client;