import express from "express"// module 
//const express = require('express') // common js
const PORT=3000
const app=express();//A server named 'app' is getting created 

app.get("/", (req, res)=> {
    res.send("hello");
});
app.post("/", (req, res)=> {
    res.send("Login sucessfull");
});
app.put("/user", (req, res)=> {
    res.send("User Updated");
});
app.delete("/user-delete", (req, res)=> {
    res.send("User Deleted");
});

app.listen(PORT);
