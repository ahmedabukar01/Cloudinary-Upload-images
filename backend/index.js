const express = require('express')
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.post('/api/upload', (req,res)=>{
    const fileStr = req.body.data
    console.log(fileStr)
})

app.listen(port, ()=>{
    console.log('listening on port ', port);
})