console.log("hello");

const http= require('http')
const server = http.createServer(async(req, res)=>{
    res.end("Hello and welcome to cohort")
})
server.listen(5500,(err)=>{
    if(err) console.log(err)
        console.log("Server is live at port 5500")
})