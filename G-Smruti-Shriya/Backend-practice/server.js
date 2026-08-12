const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port,()=> {
    console.log(`app is listening on port ${port}`);
})

app.get('/' , (req,res)=>{
res.send("The main path")
})

app.get('/apple' , (req,res)=>{
res.send("The apple path")
})

app.get('/orange' , (req,res)=>{
res.send("The orange path")
})

app.get('*' , (req,res)=>{
res.send("This path doesnt exist")
})