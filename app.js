const express = require('express')

const app = express();

app.get('/home', (req,res)=> {
    res.setHeader('Content-Type','text/plain');
    res.send("hello world home");
});

app.get('/contact ', (req,res)=> {
    res.setHeader('Content-Type','text/plain');
    res.send("hello world contact ");
});


app.listen(3000);