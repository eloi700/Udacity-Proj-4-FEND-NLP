var path = require('path')
// import path from 'path';
const express = require('express')
// import express from 'express';
// const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
// import dotenv from 'dotenv';
const fetch = require('node-fetch');
// import fetch from 'node-fetch';
dotenv.config();
//require('dotenv').config()

const app = express()

app.use(express.static('dist'))

// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (request, response) {
    fetch(`https://api.meaningcloud.com/lang-4.0/identification?key=${process.env.API_KEY}&txt=${request.query.words}`)
    .then(resp => resp.json())
    .then(jsonData => {
        response.send(jsonData.language_list[0]);
        // console.log('response', jsonData.language_list[0].name);
    })
})
