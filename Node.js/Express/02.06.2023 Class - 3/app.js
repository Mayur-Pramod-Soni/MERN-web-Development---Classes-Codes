var express = require('express');

var app = express() // instance create based on express

app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
    // res is an object , is use for cALL send File method for run html file
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.get('/service',(req,res)=>{

})

app.get('/images',(req,res)=>{

})

app.get('/login',(req,res)=>{

})
app.listen(3000)
