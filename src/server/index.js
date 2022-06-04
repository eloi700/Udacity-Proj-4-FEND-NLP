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

//Make API request
app.get("/test", function (request, response) {
  const urlRegex = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&amp;=]*)?/;
  const isUrl = urlRegex.test(request.query.words);
  const parameter = isUrl ? "url" : "txt";

  fetch(
    `https://api.meaningcloud.com/lang-4.0/identification?key=${process.env.API_KEY}&${parameter}=${request.query.words}`
  )
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        return resp.text().then((text) => {
          throw new Error(text);
        });
      }
    })
    .then((jsonData) => {
      response.send(jsonData.language_list[0]);
    })
    .catch((error) => {
      response.status(400).send(error.message);
    });
});
