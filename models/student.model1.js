 /**
  * define the schema of student collection to be stored in DB
  */
 const mongoose=require('mongoose');

 //schema

 const studentSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true //constraints
     },
     age:{
        type:Number,
        min:18
     },
     email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:15
     },
     subjects:[String],
     createdAt:{
       type:Date,
       immutable:true,
       default:()=>{
        return Date.now();
       }
     }
 },{versionKey:false,timestamps:true})
 // go ahead and create a collection in mongoDB
 module.exports=mongoose.model("Student",studentSchema); //where Student is the collection name in databse
