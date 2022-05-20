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

app.get('/test', function (req, res) {
    // res.send(mockAPIResponse)
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=Main dishes were quite good, but desserts were too sweet for me.`)
    .then(resp => resp.json())
    .then(response => {
        response.score_tag;
        // if score_tag === N+ || N{
        //     res.sendStatus(403);
        // }
    })
})
