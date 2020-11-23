'use strict';

// Application Dependencies
const express = require('express');
//CORS = Cross Origin Resource Sharing
const cors = require('cors');
//DOTENV (read our enviroment variable)
require('dotenv').config();
const superagent = require('superagent');


// Application Setup
const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());


//Routes
app.get('/location', locationHandlerFunc);
app.get('/weather', weatherHandlerFunc);
app.get('*', notFoundPageHandler);
app.use(errorHandler);



// https://city-explorer-backend.herokuapp.com/location?city=amman
function locationHandlerFunc(req, res) {
    // ? -> query string parameteres
    let cityName = req.query.city;
    console.log(req.query);
    console.log(cityName);
    console.log('hhhhhhhhhhhhh2222');
    // to get data from api server -> request url + key
    let locKey = process.env.LOCATION_KEY;
    let url = `https://eu1.locationiq.com/v1/search.php?key=${locKey}&q=${cityName}&format=json`;

    // superagent: client-side HTTP request library
    console.log('before the superagent');

    superagent.get(url)
        .then(data => {
            console.log('inside the superagent');
            console.log(data.body);
            let locationData = new Location(cityName, data.body);
            res.send(locationData);
        })
        .catch(() => {
            errorHandler('Location .. Something went wrong!!', req, res);
        });

    console.log('after the superagent');


}

function Location(city, geoData) {
    this.search_query = city;
    this.formatted_query = geoData[0].display_name;
    this.latitude = geoData[0].lat;
    this.longitude = geoData[0].lon;
}

//http://localhost:3000/weather
function weatherHandlerFunc(req, res) {
    const geoData = require('./data/weatherbit.json');
    //   console.log(geoData);
    let weatherDaily = geoData.data.map(val => {
        return new Weather(val);
    });
    res.send(weatherDaily);
}

function Weather(day) {
    this.forecast = day.weather.description;
    //   this.time = new Date(day.datetime).toString().slice(0,15);
    this.time = day.datetime;

}

function notFoundPageHandler(req, res) {
    res.status(404).send('Not Found');
}

function errorHandler(error, req, res) {
    res.status(500).send(error);
}

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
