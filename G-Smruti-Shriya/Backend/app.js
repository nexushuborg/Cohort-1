console.log("Hello")
const http = require('http')
const server = http.createServer(async (req ,res) => {
    res.end("Hello and welcome to cohort");
})