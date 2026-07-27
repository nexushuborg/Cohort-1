//console.log("Hello World");
import express from "express";  // module
//const express = require("express");  // commonjs

// hw difference bw module and commonjs 
const app = express(); // this means a server named app is getting created 

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000);