// console.log("Hello")
import express from "express"; //module


const app = express();
app.get("/" , (req,res) => {
    res.send("Hello");
})
app.listen(3000);