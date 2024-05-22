const express = require("express");
const cors = require("cors");
const app = express();
// const bodyParser = require("body-parser");
const port = 9000;
const axios = require("axios");

app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getdata", (req, res) => {
  let { keyword, distance, category, location } = req.query;
  if (category == "Default") {
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  } else if (category == "Music") {
    category = "KZFzniwnSyZfZ7v7nJ";
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&segmentId=")
        .concat(category, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  } else if (category == "Sports") {
    category = "KZFzniwnSyZfZ7v7nE";
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&segmentId=")
        .concat(category, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  } else if (category == "Arts & Theatre") {
    category = "KZFzniwnSyZfZ7v7na";
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&segmentId=")
        .concat(category, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  } else if (category == "Film") {
    category = "KZFzniwnSyZfZ7v7nn";
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&segmentId=")
        .concat(category, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  } else if (category == "Miscellaneous") {
    category = "KZFzniwnSyZfZ7v7n1";
    events_url =
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword="
        .concat(keyword, "&segmentId=")
        .concat(category, "&radius=")
        .concat(distance, "&unit=miles&geoPoint=")
        .concat("9q5cs", "&apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
  }

  axios.get(events_url)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.get("/getEventDetails", (req, res) => {
    let { id } = req.query;
    var details_url = "https://app.ticketmaster.com/discovery/v2/events/".concat(id, "?apikey=S3OASSmNyy57pmIOIGWTG78Ht2u8CTsz");
    axios.get(details_url).
        then(function (response) {
        console.log(response.data);
        res.json(response.data);
    }).catch(function (error) {
        console.log(error);
    });
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
