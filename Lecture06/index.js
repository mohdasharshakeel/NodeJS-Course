const fs = require("fs")

// Sync --- Blocking
//fs.writeFileSync("./test.txt" , "this is my file")

const result = fs.readFileSync("test.txt", "utf-8")
console.log(result)

// Aync --- Non blocking 
fs.writeFile("./test.txt", "hellow world Async" , (err)=>{

})