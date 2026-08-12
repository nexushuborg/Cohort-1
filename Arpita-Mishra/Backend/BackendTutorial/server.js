const express = require('express');
const app = express();
require('dotenv').config()
const { initDatabase } = require('./controllers/initDb.js');
const db = require('./models/connection.js');
initDatabase(); 

const PORT=process.env.PORT;
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Home page'
    });
});
app.get('/users', async (req, res) => {
    const getUsersQuery = 
    `SELECT * FROM users`;
    try {
        const result = await db.query(getUsersQuery);
        res.status(200).json({
            status: "success",
            message: "All users fetched",
            data: result.rows
        })
    } catch (error) {
        
        return res.status(500).json({
            status: 'failed',
            message: 'Something went wrong'
        });
    }
});

app.post('/users', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        const createUserQuery = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email;
        `

        const result = await db.query(createUserQuery, [
            username,
            email,
            password
        ]);

        res.status(201).json({
            status: "Success",
            message: "Created user successfully",
            data: result.rows[0]
        });

    } catch (error) {
    res.json({
        status: "Failure",
        message: "User Cannot be created",
        error: error
    });
}

});
app.delete('/users/:email', async (req, res) => {
    const { id } = req.params;
const deleteUserQuery = `
        DELETE FROM users
        WHERE id = $1;
    `;try {
        await db.query(deleteUserQuery, [id]);
        res.status(200).json({
            status: "success",
            message: "User deleted successfully"
 });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Something went wrong"
        });
    }
});
app.post('/user', async (req, res) => {

const { email, password } = req.body;
const getUserQuery = `
    SELECT *FROM users
    WHERE email = $1 AND password = $2;
    `;
try {
const result = await db.query(getUserQuery, [
            email,password
        ]);
res.status(200).json({
        status: "success",
        message: "User fetched successfully",
        data: result.rows
        });

    } 
    catch (error) {

        res.status(500).json({
            status: "failed",
            message: "Something is  wrong"
        });

    }

});
app.listen(PORT, (err) => {
    if (err) console.log(err);

    console.log(`Successfully Connected To Server at PORT: ${process.env.PORT}`);

});
