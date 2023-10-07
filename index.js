const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/college")

// -------------------------------------------------------------

const express = require("express");
const app = express();

const employeeRoute = require("./routes/employeeRoutes")


app.use("/",employeeRoute)

app.listen(3000,() =>{
  console.log("running Successfully")
})