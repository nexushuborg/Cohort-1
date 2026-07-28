const express = require('express');
const app = express();
require('dotenv').config();
const {initDatabase} = require('./controllers/initDb.js');
const dp = require('./models/connection.js');


initDatabase();

PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).jsson({
    status: "success",
    message: "Welcome to home page"
  })
});

app.get('/users', async (req, res) => {

  const getUsersQuery = `SELECT * FROM users;`;
  try{
    const result = await dp.query(getUsersQuery);
    res.status(200).json({
      status: "success",
      message: "All User fetched",
      data: result.rows
    })
  }catch(error){
    return res.send(500).json({
      status: "failed",
      message: "Something went wrong",
      error: error
    })
  }
})
  
app.listen(process.env.PORT, (err) => {
  if(err) console.log(err);

      console.log(`Server is running on port ${PORT}`);
})