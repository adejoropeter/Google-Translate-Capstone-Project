const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});
app.get("/post", (req, res) => {
  console.log(req);
  const axios = require("axios");
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", "Good morning Peter");
  encodedParams.append("target", "yo");
  encodedParams.append("source", "en");
  // encodedParams.append("q", textToTranslate);
  // encodedParams.append("target", to);
  // encodedParams.append("source", from);
  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };
  axios
    .request(options)
    .then(function (response) {
      res.json(response.data.data.translations[0].translatedText);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.get("/get", (req, res) => {
  const options = {
    method: "GET",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running in port ${PORT}`));
