const fs = require("fs")
const data = fs.readFile("data.json", "utf8", (d) => {
    return d
});
console.log(data)