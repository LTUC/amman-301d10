'use strict';

//load the dependencies
const express = require('express');
// Load Environment Variables from the .env file
require('dotenv').config(); 
const cors = require('cors');
const pg = require('pg');



//Application setup
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();



// ROUTES
// localhost:3000/getPeople
app.get('/getPeople',getPeopleFunc);

// localhost:3000/addPeople?first=Husam&last=Ajour
app.get('/addPeople',addPeopleFunc);

// localhost:3000/updatePeople?first=Sherry
app.get('/updatePeople',updatePeopleFunc);

// localhost:3000/deletePeople?first=Husam
app.get('/deletePeople',deletePeopleFunc);

function getPeopleFunc(req,res) {
    let SQL = `SELECT * FROM people;`;
    client.query(SQL)
    .then(result=>{
        res.json(result.rows);
    })
    .catch(error=>errorHandler(error, req, res))
}


// localhost:3000/addPeople?first=Husam&last=Ajour
function addPeopleFunc(req,res) {
    let firstN = req.query.first;
    let lastN = req.query.last;
    let SQL = `INSERT INTO people (firstName,lastName) VALUES ($1,$2)`;
    let safeValues = [firstN,lastN];

    client.query(SQL,safeValues)
    .then (() =>{
        res.send('your data has been added successfully!!');
    })
}

// localhost:3000/updatePeople?first=Sherry
function updatePeopleFunc(req,res) {
    let firstN = req.query.first;
    let SQL = `UPDATE people SET firstName = $1 WHERE lastName='Quran';`;
    let safeValues = [firstN];

    client.query(SQL,safeValues)
    .then (result =>{
        res.send('your data has been updated successfully!!');
    })
}

// localhost:3000/deletePeople?first=Husam
function deletePeopleFunc(req, res) {
    let firstName = req.query.first;
    let safeValues = [firstName];
    let SQL = `DELETE FROM people WHERE firstName=$1`;
    client.query(SQL,safeValues)
        .then(() => {
            res.send('your data has been deleted successfully!!');
        })
}


// Error Handler
app.get('*', notFoundHandler);
app.use(errorHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

function errorHandler(error, request, res) {
    res.status(500).send(error);
}


client.connect()
.then(()=>{
    app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
    );
})

////////
////////
////////
////////

