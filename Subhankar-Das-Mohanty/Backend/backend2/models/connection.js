const {Pool,client,query} = require('pg')

const pool = new Pool({
  max : 20,
  idealtimeoutMillis : 30000,
})

pool.connect((err, client, release) => {
  if(err) console.log(err);
  console.log("Database connected successfully");
  release();
})

module.exports = {
  client: () => pool.connect(),
  query: (text, params) => pool.query(text, params)
}