import express from 'express';
const PORT = 6969;


const app=express()

app.get('/',(req,res)=>{
res.send('Hello')
}
)

app.listen(PORT,()=>console.log('Server Running on '+PORT))