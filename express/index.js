let express=require("express")

let app=express()
app.use(express.json())
let myPass="12345"

let checkToken=(req,res,next)=>{
      console.log(req.query.token)
    if(req.query.token=="" || req.query.token==undefined){
        return res.send(
            {
                status:0,
                msg:"please fill the token"
            }
        )

        
    }
  
     if(req.query.token!= myPass){
        return res.send(
            {
                status:0,
                msg:"please fill the correct token"
            }
        )

        
    }
    next()
}
app.use(checkToken) // Middleware

app.use((req,res,next)=>{
if(req.query.pass=="" || req.query.pass==undefined){
        return res.send(
            {
                status:0,
                msg:"please fill the password"
            }
        )

     
    }
  
     if(req.query.pass!= myPass){
        return res.send(
            {
                status:0,
                msg:"please fill the correct password"
            }
        )

        
    }
  next()
})



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