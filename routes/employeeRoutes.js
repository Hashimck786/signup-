const express = require("express");
const employeeRoute = express();


employeeRoute.use(express.json());
employeeRoute.use(express.urlencoded({extended:true}));

employeeRoute.set("view engine","ejs");
employeeRoute.set("views","./views");

const employee = require("../controllers/employeeController");


employeeRoute.get("/register",function(req,res){
  res.render("register")
})

employeeRoute.post("/register" , employee.insertEmployee);

module.exports = employeeRoute;
