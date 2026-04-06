import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const app = express();

app.get('/',(req,res)=>
{
    res.send("heyy")
})

app.listen(process.env.PORT,()=>
{
    console.log("port number is ",process.env.PORT)
})

