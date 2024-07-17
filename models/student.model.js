 /**
  * define the schema of student collection to be stored in DB
  */
 const mongoose=require('mongoose');

 //schema

 const studentSchema=new mongoose.Schema({
     name:String,
     age:Number
 })
 // go ahead and create a collection in mongoDB
 module.exports=mongoose.model("Student",studentSchema); //where Student is the collection name in databse
