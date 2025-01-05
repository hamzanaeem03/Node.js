import express from "express"
const app = express();
const PORT = 4000;

app.get('/', (req , res)=>{
console.log('first api')
res.send('this is response')
})


app.post('/', (req , res)=>{
    console.log('first api')
    res.send('this is response from post request')
    })



    app.put('/', (req , res)=>{
        console.log('first api')
        res.send('this is response from put request')
        })

        app.delete('/', (req , res)=>{
            console.log('first api')
            res.send('this is response from delete request')
            })
    
app.listen(PORT , ()=> console.log('port is running'))