'use strict';

require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// get the static files inside the public folder
app.use(express.static('./public'));

// Express middleware are functions that execute during the lifecycle of a request to the Express server.
// Each middleware has access to the HTTP request and response for each route (or path) it's attached to.
// converts a POST from a form into req.body for you
app.use (express.urlencoded({extended:true}));

app.get('/sendDataGet',(req,res)=>{
    // res.send('okay');
    let catName = req.query.name;
    console.log(catName);
    res.redirect('/cat.html')
})

app.post('/sendDataPost',(req,res)=>{
    console.log(req.body);
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});