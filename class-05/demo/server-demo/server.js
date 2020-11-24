'use strict';

// make a variable called express to use the express library to build the server
const express = require('express');

// server has all the properities and methods of express library 
const server = express();


// to access any files inside the public folder
server.use(express.static('./public'));

const PORT = process.env.PORT || 3000;


server.get('/test',(request,response)=>{
   console.log('test route');
    response.send('your test route is working')
})

server.get('/people',(request,response)=>{
    let family = [
        {name:'Razan'},
        {name:'Abdulrahman'},
        {name:'Fatima'},
        {name:'Hanaa'},
        {name:'Husam'}
    ];
    response.json(family);
})


server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})