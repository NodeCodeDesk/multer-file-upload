const express = require('express')
const multer = require('multer')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'./upload')
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage: storage})

// For single file upload
app.post('/single',upload.single('profile'),(req,res)=>{
    try {
        res.send(req.file)
    } catch (error) {
        res.send(400) //bad request
    }
})

// For multiple file upload
app.post('/multiple',upload.array('files',2),(req,res)=>{
    try {
        res.send(req.files)
    } catch (error) {
        res.send(400)
    }
})

app.listen(3000)
