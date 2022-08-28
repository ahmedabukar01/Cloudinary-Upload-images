const express = require('express')
const {cloudinary} = require('./utilities/cloudinary')
const cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}))

// get images
app.get('/api/images', async (req,res)=>{
    const {resources} = await cloudinary.search.expression('mystore')
    .sort_by('public_id', 'desc')
    .execute();
    const publicIds = resources.map(res=> res.public_id);
    res.json(publicIds);
    console.log(publicIds)
})

app.post('/api/upload', async (req,res)=>{
   try {
    const fileStr = req.body.img

    const resUploaded = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'my_store',
    })
    console.log(resUploaded);
    res.json({msg: 'yo its done !'})
   } catch (error) {
    console.error(error);
    res.json({msg: 'something went wrong'})
   }

})

app.listen(port, ()=>{
    console.log('listening on port ', port);
})