'use strict';

const express = require('express');
require('dotenv').config();
const superagent = require('superagent');


const app = express();
const PORT = process.env.PORT;

app.use(express.static('./public'));

// tell the express that I'm gonna use ejs templating engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.send('home page');
    res.render('index');
})

app.get('/list',(req,res)=>{
    let family = ['Atallah','Mesina','Ali','Eman'];
    res.render('listPage',{fam:family});
    // res.render('ejs page name',data)
})

app.get('/listOfBooks',(req,res)=>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=cats`;
    superagent.get(url)
    .then(result =>{
        // res.json(result.body);
        res.render('booksPage',{books:result.body.items});
    })
})

app.listen(PORT,()=>{
    console.log(`Listening on PORt ${PORT}`);
})