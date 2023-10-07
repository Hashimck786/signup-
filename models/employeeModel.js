const mongoose = require("mongoose");


const employeeSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  mobileNumber:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee;