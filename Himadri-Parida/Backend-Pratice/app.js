const http = require('http');
const server = http.createServer(aync (req, res) => {
    res.end("Hello welcome to the cohort Practice")
})
server.listen(3000, (err) =>{
    if(err) console.log(err)
        console.log("Server is running on port 3000")
} )