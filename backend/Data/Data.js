const express=require('express')
const bodyParser=require('body-parser')
const { default: Contact } = require('../../src/HeaderElement/Contact')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/Details',(req,res)=>{
  const Name=req.body.Name
  const Email=req.body.Email
  const Adhar=req.body.Adhar
  const Phone=req.body.Phone
  const Message=req.body.Message
  console.log(Name,Email,Adhar,Phone,Message)
  res.send("data recieved succesfully ")

})
app.listen(3000,()=>{
  console.log(`server started at {${port}}`)
})