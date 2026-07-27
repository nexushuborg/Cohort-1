const fs = require("fs")

const data = fs.readFileSync("data.json", "utf-8", (err, data) => {
    if(err) console.log("error, something is wrong")
    console.log(data)
     return data
});

console.log("hello world")
console.log(data)