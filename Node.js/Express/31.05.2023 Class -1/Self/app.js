var express = require("express");

var myapp = express();  // express is a function to create express applications

//we can call method by applications
// our application name is myapp 

myapp.get('/', (req, res) => {     // method calling 
    res.send("Hello World");
})

// this url is default perform by default localhost : 9000 // 9000 is a port number

myapp.get("/home", (req, res) => {
    res.send("welcome to home page");

    // myapp.get("/student",(req,res)=>{
    //     res.send("welcome to Mr. Mayur");
})
myapp.get("/myjson", (req, res) => {
 
    var mjson = {
        "name": "Mayur"

    }
    res.send(mjson)   // that is local file and run on web page due after writing address
})

myapp.get("/location", (req, res) => {
    res.send(__dirname)
})



// this url is default perform by default localhost:9000/student 


myapp.listen(9000)
console.log("http://localhost:9000");
console.log("we can run by")
console.log(__dirname)

