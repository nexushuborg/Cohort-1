const express = require('express')
const { log } = require('node:console')
const app = express()
require('dotenv').config()
const {initDatabases, initDatabase} = require('./controllers/initDb.js');
const db = require('./models/connection.js')

initDatabase();

app.get('/',(req,res)=>{
    res.status(200).json({
            status: "Success",
            message: "Welcome to the home page"
         })
})

app.get('/users', async (req,res)=>{
     const getUsersQuery = `
        SELECT * FROM users
     `
     try{

        const result = await db.query(getUsersQuery);
        res.status(200).json({
            status: "Success",
            message: "All users Fetched",
            data: result.rows
        })
     }
     catch(error) {
        return res.send(500).json({
            status: "Failed",
            message: "Something Went Wrong",
            error: error
        })
     }
})

app.listen(process.env.PORT,(err)=>{
   if (err) {
        console.log(err)
    }
    
    console.log(`Successfully Connected to Server at Port: ${process.env.PORT}`)
    
})