const path = require("path");
const express = require("express");
// const mockAPIResponse = require('./mockAPI.js')
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const app = express();

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (request, response) {
  if (!request.query.words) {
    response.status(400).send("Error: Word Undefined");
  } else {
    fetch(
      `https://api.meaningcloud.com/lang-4.0/identification?key=${process.env.API_KEY}&txt=${request.query.words}`
    )
      .then((resp) => resp.json())
      .then((jsonData) => {
        response.send(jsonData.language_list[0]);
      });
    }
});
