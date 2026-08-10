//console.log("Hello World");
import express from "express";  // module
//const express = require("express");  // commonjs

// hw difference bw module and commonjs 
const app = express(); // this means a server named app is getting created 
const PORT = 8080;
app.get("/", (req, res) => { 
    res.send("Hello");
    // ye app.get is used to send a response for any request 
    // req mtlb client se jo request aaya
    // res mtlb server to client jo response jaygea
    //  localhost:3000/ iska mtlb basic main api ka directory ya domain me jayenge toh uske apna ko kya dikhega
    // loop back addressing : browser se response gya ek server pe toh wo ham nhi chahate ki server kahi bahar ka ho apn chahate h jo request bheje ho apne se system k localhost pe jake baat kre kahin bahar nahi 
    // 3000 is port number jaha pe server run hoga
    // apne computer ka ek ip address hota hai 
    // ggogle k pass gya ki merko iss ip adress pe request bhejna hai toh google ka server apne computer ke ip address pe request bhejega aur apne computer ka server uska response bhejega
    //  localhost:3000/ iska mtlb basic main api ka directory ya domain me jayenge toh uske apna ko kya dikhega
    // APNE PC PE BAHAT SARA POST HOTA HAI SO WE WANT KI PORT 3000 PE HE LISTEN KRE ISLIYE LISTEN USE KRTE H 
    // 3000 HO YA 8080 KISI PE V KR SKTE HAI 
    // app.get("/api", (req, res) => { krte and brower me localhost:8080/api likhte toh  cannot get / aaise dikha deta wahi if localhost:8080/api krte toh dikhta
    // kya dikhana hai wo iss line se krte hai
    // server se jab kuch bhejnta jo client ko toh post use krte haai
    // post put delete ye sab server to client jata hai
    // get works from brower to server and post put delete works from server to browser or client or frontend
//app.post("/login",(req,res)=>{
//     res.send("Login Successful");
//     });

//app.put("/user",(req,res)=>{

//     res.send("User Updated");

// });

//app.delete("/user",(req,res)=>{

//     res.send("User Deleted");
// });

app.listen(PORT);
});