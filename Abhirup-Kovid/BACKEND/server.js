import express from "express"; //modules
// const express = require('express') //common js

const app = express(); //A server named 'app' is getting created

const PORT = 8080 

app.get("/api", (req, res) =>{
    res.send("Helloww");
});

app.post("/login", (req,res)=>{
    res.send("Login Successful")
})

app.put("/user", (req,res)=>{
    res.send("User Defined")
})

app.delete("/user", (req,res)=>{
    res.send("User Deleted")
})

app.listen(PORT);