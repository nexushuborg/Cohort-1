//connection.js file
const {client,query,Pool} = require('pg')

const pool = new Pool({
    max:20,
    idleTimeoutMillis:30000,
})

pool.connect((err,client,release) => {
    if(err) console.log(err)
    console.log("Succesfully Connected database");
    release();
})

module.exports = {
    client : ()=> pool.connect(),
    query :(text,params)=> pool.query(text,params)
}