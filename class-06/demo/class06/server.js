'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const server = express();
server.use(cors());


const PORT = process.env.PORT || 3030;


// server.get('/test',(req,res)=>{
//     res.send('your server is working!!')
// })

// handle any route
// request url: localhost:3000/
server.get('/', (req, res) => {
    res.status(200).send('you did great')
})

//Request url: localhost:3000/location
server.get('/location', (req, res) => {
    // res.send('location route is working')

    // get data from location.json
    const locationData = require('./data/location.json');
    console.log(locationData);
    const locationObj = new Location('Lynnwood',locationData)
    res.send(locationObj);
    //send back a response 

})

// {
//     "search_query": "seattle",
//         "formatted_query": "Seattle, WA, USA",
//             "latitude": "47.606210",
//                 "longitude": "-122.332071"
// }

function Location(city,locData) {
    this.search_query = city;
    this.formatted_query=locData[0].display_name;
    this.latitude = locData[0].lat;
    this.longitude = locData[0].lon; 
}





// localhost:3000/aaa
// localhost:3000/dsfsd
// localhost:3000/test2
server.get('*', (req, res) => {
    res.status(404).send('not found')
})

server.use((error, req, res) => {
    res.status(500).send(error);
})



server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})

