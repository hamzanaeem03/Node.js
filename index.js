import express from "express"
const app = express();
const PORT = 4000;

app.get('/', (req , res)=>{
console.log('first api')
res.send('this is response')
})


app.listen(PORT , ()=> console.log('port is running'))