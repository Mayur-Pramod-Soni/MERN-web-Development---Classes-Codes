

var myexpress=require(`express`)
var app=myexpress()

app.get('/',(req,res)=>{
    res.send("<h1> welcome in home page</h1>")



})

app.get('/about',(req,res)=>{
    res.send("<h1> welcome in about page</h1>")



})

app.post('/dataadded',(req,res)=>{
    res.send("data and successfull")
})




app.put('/changedata',(req,res)=>{
    res.send("data change succesfully")
})



app.delete('/deletedata',(req,res)=>{
    res.send("data is deleted")
})

app.listen(9000)
console.log("http://localhost:9000")
