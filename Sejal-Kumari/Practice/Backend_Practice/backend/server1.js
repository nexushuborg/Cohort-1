const express = require ('express')
const app=express();
require('dotenv').config()
const {initDatabase}=require('./controllers/initDb');
const db=require('./models/connections.js')
initDatabase();

const PORT= process.env.PORT;

app.get('/', (req,res)=>{
    res.status(200).json({
        status :"Sucess",
        message: "Welcome to the home page"
    })
})
app.get('/users',async(req,res)=>{
    const getusersQuery=`
    SELECT * FROM users
    `
    try{
        const result=await db.query(getusersQuery);
        res.status(200).json({
            status:"Success",
            message:"All Users Fetched",
            data:result.rows
        })
        
    }
    catch(error){
        return res.send(500).json({
            status:"Failed",
            message:"Something went wrong",
            error:error
        })
    }
})
app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err)

        console.log(`Successfully connected to the server at PORT: ${PORT}`);
})