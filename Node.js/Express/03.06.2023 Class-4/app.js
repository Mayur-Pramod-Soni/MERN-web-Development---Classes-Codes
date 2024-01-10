var express = require('express')
var app = express();
var bodyparser = require("body-parser")


app.use(bodyparser.urlencoded({extended:false}))

app.set('view engine','ejs')  // setting the view engine as ejs(file type)


 app.get('/',(req,res)=>{
     res.render('home')      // url is called as Routing
 })

app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/index',(req,res)=>{
    res.render("index")
})

app.listen(8010)