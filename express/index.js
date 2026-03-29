let express=require("express")

let app=express()
app.get("/",(req,res)=>{ //http://localhost:3000
res.send({name:'Kalam', age:54,msg:"home screen"})
})


app.get("/news",(req,res)=>{ //http://localhost:3000/news
res.send({name:'Kalam', age:54,msg:"news screen"})
})

app.listen("3000")