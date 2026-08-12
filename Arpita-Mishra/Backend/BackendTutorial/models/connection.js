const { Pool } = require('pg');   // here we have imported the pool class pool class  bahat sara connection banata hai jaha pe sab chiz handle aur return krta h query ko 
const pool = new Pool({
    // if har query
    max: 20,  // max is maximum no of connection jo ban skta hai 
    idleTimeoutMillis: 30000,  // if 30 section tk koi request ni aaya toh uss connetion ko remove kr denge 
});
 // jab server start krenge  toh ye niche wala jo h wo check krega ki koi error toh nhi h
pool.connect((err, client, release) => {  // pool.connect ek connection open krta hai 
    if (err) console.log(err);

    console.log("Successfully Connected to the Database");

    release(); // release ek connection ko close krta hai
});

module.exports = {
    client: () => pool.connect(),  // client object  jo ki return krega pool.connect ko 
    query: (text, params) => pool.query(text, params),
};
