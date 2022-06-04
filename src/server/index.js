const express = require("express"),
dotenv = require("dotenv"),
fetch = require("node-fetch"),
app = express();

dotenv.config();

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
  console.log("Example app listening on port 8081!");
});

//sending error message and making API request
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
