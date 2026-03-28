let http=require('http')
let server=http.createServer((req,res)=>{
    if(req.url== '/news'){
        let obj={
            name:'karim',
            others:[
                {
                    id:1,
                    title:'bangladesh',
                    age:50,
                    positions:'PS'
                },
                  {
                    id:2,
                    title:'nepal',
                    age:30,
                    positions:'ISPR'
                }
            ]
        }
        res.end(JSON.stringify(obj)) //http://localhost:3000/news
    }
    if(req.url=='course'){
        
    }
    res.end('welcome to node.js ')

})
server.listen("3000") //http://localhost:3000