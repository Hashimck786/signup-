const Employee = require("../models/employeeModel")



const insertEmployee = async (req,res) => {

  try {
    
  const employee = new Employee ({
    name:req.body.name,
    mobileNumber:req.body.mobileNumber,
    email:req.body.email,
    password:req.body.password
  });
  const result = await employee.save();
  res.send("registration successful" + result)


  } catch (error) {
    res.send(error.message)
  }

}

module.exports = {
  insertEmployee
}