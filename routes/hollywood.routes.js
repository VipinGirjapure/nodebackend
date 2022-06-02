const { Router } = require("express");
const express=require("express");
const {GetHollywoodPageData,GetHollywoodProduct}=require("../controllers/hollywood.controller");

const hollywoodrouter=express.Router();


hollywoodrouter.get("/hollywood",GetHollywoodPageData)

hollywoodrouter.get("/hollywood/:productid",GetHollywoodProduct) ; 
// hollywoodrouter.get("/data/:type",GetData) ;

module.exports=hollywoodrouter;