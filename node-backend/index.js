const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const http = require('http');
const { read } = require('fs');

const triangleRoute = express.Router();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname,'dist/')));

app.get('/',(req,res)=>{
    res.senFile(path.join(__dirname,'dist/index.html'))
})

app.use(express.json());
app.use(express.urlencoded({extended:false}))
const triangle = {base: 5,height:3,area: null}

//Api Calulete Area
app.post('/caluleteArea',(req,res)=>{
    let base = Number(req.body.base)
    let height = Number(req.body.height)
    let area = 1/2 * base * height
    triangle.area = area
    res.send(triangle)
    console.log('triangle  area : ' + area)
})

//PORT
const port = process.env.PORT || 8000;
app.listen(port,() =>{
    console.log('Listening on port: ' + port)
})

