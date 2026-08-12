const express = require("express");
const app = express();
require('dotenv').config()
const {initDatabase} = require('./controllers/initDb.js');
const db = require('./models/connection.js');
initDatabase();

PORT = process.env.PORT;

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        status:"Success",
        message: "Welcome to the home page"
    })
})

app.get('/users', async (req,res) => {
    const getUsersQuery = `
    SELECT * FROM users;
    `
    try{
        const result = await db.query(getUsersQuery);
        res.status(200).json({
            status:"Success",
            message: "All users Fetched",
            data: result.rows
        })
    }catch(error){
        return res.status(500).json({
            status:"Failed",
            message: "Something went wrong",
            error: error
        })
    }
    
})

app.post('/users' , async (req,res) => {
    const {username , email , password} = req.body
    try{
        const createUserQuery = `
        INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3)
        RETURNING id,username,email,password;
        `
        const result = await db.query(createUserQuery , [username , email , password]);

        res.status(201).json({
            status : "Success" ,
            message : "Created user successfully",
            data : result.rows[0]
        })
    }catch(error){
        return res.status(500).json({
            status: "Failed",
            message: "Something went wrong",
            error: error
    })
    }
})

app.delete('/users', async (req, res) => {
    const { email } = req.body;
    try {
        const deleteUserQuery = `
        DELETE FROM users WHERE email = $1
        RETURNING id, username, email;
        `
        const result = await db.query(deleteUserQuery, [email]);

        res.status(200).json({
            status: "Success",
            message: "User deleted successfully",
            data: result.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: "Something went wrong",
            error: error
        })
    }
})

app.post('/info' , async (req,res) => {
    const {email , password} = req.body;
    try{
        const getUserDetails = `
        SELECT id , username , email
        FROM users
        WHERE email = $1 AND password = $2`

        const result = await db.query(getUserDetails, [email , password])

        res.status(202).json({
            status: "Success",
            message: "Information retrieved successfully",
            data: result.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            message: "Something went wrong",
            error: error
        })
    }
})

app.listen(PORT , (err)=>{
    if(err) console.log(err);
    console.log(`Successfully connected to server at port ${PORT}`);
})