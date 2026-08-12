const route= require('express').Router();

homeRoute.get('/',(req,res)=>{
    res.status(200).json({
        status :"Success",
        message: "Welcome to the home page"
    })
})