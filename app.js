

const express = require('express')

const app = express()

app.get('/',(req , res)=>{

    res.send({
        "Message":"Server Working Fine"
    })
    
})

app.get('/api',(req , res)=>{

    res.send({
        "Meassage":"Api Working fine 1"
    })

})

app.use(express.urlencoded({ extended:true  }))

app.listen(3000, ()=>{
    console.log("server listinging on 3000")
})