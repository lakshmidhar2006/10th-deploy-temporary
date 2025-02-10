const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({message:"dscneucneucne"})
})
app.post('/',(req,res)=>{
    const {age, bar } = req.body
    if(age<5)
        res.status(400).send("you are not eligible")
    res.status(200).send("okkkkkkk") 
})
port = 3001
app.listen(port,()=>{
    console.log(`${port}`)
})