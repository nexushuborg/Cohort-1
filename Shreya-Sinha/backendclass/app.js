const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello and welcome to cohort")
})

server.listen(3000, (err) => {
    if (err) console.log('err');
    console.log('Server is running on port 3000');
})

