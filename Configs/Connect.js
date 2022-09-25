const mongoose  = require("mongoose");

const connect  =()=>{
    return mongoose.connect("mongodb+srv://Tarun:Tarun1234@cluster0.qe0mbrl.mongodb.net/assignment")
}




module.exports= connect
