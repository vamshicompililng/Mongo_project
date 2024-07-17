// const mongoose=require("mongoose");
// const studentModel = require("./models/student.model1");


// /**
//  * connection with mongoDB
//  */
// mongoose.connect("mongodb://localhost/be_demoDB"); //be_demoDB is the database name

// const db=mongoose.connection; //start the connection with mongodb 
// db.on("error",()=>{
//     console.log("Error while connecting to DB");
// });

// db.once("open",()=>{
//     console.log("Connected to MongoDB");
//     //logic to Insert data into DB
//     init();
//     // running the queries on MongoDB
//     dbQueries();
// });
// async function init(){
//     //logic to Insert data into DB
//     const student={
//         name:"Vamshi",
//         age:20,
//         email:"vamshi@gmail.com",
//         subjects:["Maths","English",'Hindi']

//     }
//     const student1={
//         name:"ajay",
//         age:21,
//         email:"ajayreddy1223@gmail.com",
//         subjects:["Maths","English",'Hindi',"social"]
//     }
//     const stu_obj= await studentModel.create(student1); 
//     console.log(stu_obj); 

// }
// async function dbQueries(){
//     //read the student data



//     //read the student data based on id;
//     console.log("Inside the dbQueries");
//     try{
//         const student =await studentModel.findById("669771e8038b96dbc826adc7");  //669779498377a487b63a957e
//         console.log(student);
//     }catch(err){
//         console.log(err);
//     }

//     //want to search based on names
//     try{
//         const students = studentModel.find({age:20});
//         console.log(students);
//     }catch(err){
//         console.log(err);
//     }
// }
const mongoose = require("mongoose");
const studentModel = require("./models/student.model1");

// Connection with MongoDB
mongoose.connect("mongodb://localhost/be_demoDB", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection; // Start the connection with MongoDB

db.on("error", () => {
    console.log("Error while connecting to DB");
});

db.once("open", () => {
    console.log("Connected to MongoDB");
    // Logic to insert data into DB
    init();
    // Running the queries on MongoDB
    dbQueries();
});

async function init() {
    // Logic to insert data into DB
    const student = {
        name: "Vamshi",
        age: 20,
        email: "vamshi@gmail.com",
        subjects: ["Maths", "English", 'Hindi',"Telugu"]
    };
    
    const student1 = {
        name: "Ajay",
        age: 21,
        email: "ajayreddy1223@gmail.com",
        subjects: ["Maths", "English", 'Hindi', "Social"]
    };
    
    try {
        const stu_obj = await studentModel.create(student1);
        console.log(stu_obj);
    } catch (err) {
        console.error("Error creating student:", err);
    }
}

async function dbQueries() {
    // Read the student data
    console.log("Inside dbQueries");
    
    // Read the student data based on ID
    try {
        const student = await studentModel.findById("669771e8038b96dbc826adc7");
        console.log(student);
    } catch (err) {
        console.error("Error finding student by ID:", err);
    }

    // Search based on age
    try {
        const students = await studentModel.find({ age: 20 });
        console.log(students);
    } catch (err) {
        console.error("Error finding students by age:", err);
    }
    /**
     * deal with multiple conditions
     * 
     */
     const students=await studentModel.where("age").gt("10").where("name").equals("Ajay").limit(2);
    //  const stu=await studentModel.where("subjects").equals("Telugu");
     console.log(students);

     /**
      * Delete a documents
      */
     const student=await studentModel.deleteOne({name:'Ajay'});
     console.log(student);

}

