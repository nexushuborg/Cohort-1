const express = require ('express')
const app=express();
require('dotenv').config()
const {initDatabase}=require('./controllers/initDb');
const db=require('./models/connections.js')
initDatabase();

const PORT= process.env.PORT;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        status :"Success",
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

app.post('/users', async(req,res)=>{
    const { username, email, password}=req.body
    // res.json({
    //     userId:id,
    //     UserName:username,
    //     UserEmail: email,
    //     UserPswd:password
    // })

    // const body= JSON.stringify(req.body)
    // console.log(body)
    // res.send("OK")
    try{
        const createUserQuery=`
        INSERT INTO users (username, email, password)
        VALUES($1,$2,$3)
        RETURNING username, email, password;`;

        const result= await db.query(createUserQuery,
        [username, email, password]);

        res.status(201).json({
            status:"Success",
            message:"Created user successfully",
            data:result.rows[0]
        })
    }
    catch(error){
        return res.status(500).json({
            status:"Failed",
            message:"User cannot be created",
            error: error
        })

    }

})
app.delete('/users/email',async(req,res)=>{
    const {email}=req.body;

    const deleteUserQuery=`
    DELETE FROM users
    WHERE email=$1
    RETURNING *;`;
    try{
        const result = await db.query(deleteUserQuery,[email]);
        res.status(200).json({
            status:"Success",
            message: "User deleted successfully",
            data: result.rows[0]
        })
    }
    catch(error){
        res.status(500).json({
            status:"Failed",
            message: "Something went wrong",
            error: error
        })
    }

})
app.post('/users/detail', async(req,res)=>{
    const {email, password}=req.body;

    const getUserQuery=`
    SELECT * FROM users
    WHERE email=$1 AND password=$2;`;
    try{
        const result= await db.query(getUserQuery,[email,password]);
        res.status(200).json({
            status:"Success",
            message:"User Found",
            data: result.rows[0]
        })
    }
    catch(error){
        res.status(500).json({
            status:"Failed",
            message: "Something went wrong",
            error: error
        })
    }

})
app.listen(process.env.PORT, (err)=>{
    if(err) console.log(err)

        console.log(`Successfully connected to the server at PORT: ${PORT}`);
})