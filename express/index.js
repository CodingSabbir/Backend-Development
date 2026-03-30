let express=require("express")

let app=express()
app.use(express.json())


app.get("/",(req,res)=>{ //http://localhost:3000
res.send({name:'Kalam', age:54,msg:"home screen"})
})


app.get("/news",(req,res)=>{ //http://localhost:3000/news
res.send({name:'Kalam', age:54,msg:"news screen"})
})

app.post("/login",(req,res)=>{
    console.log(req.body)
     res.send({ msg: "Login received", data:res.body })
})

app.listen("3000")