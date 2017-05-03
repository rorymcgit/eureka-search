const express = require("express"),
  getLinks = require("./controllers/routes/getLinks"),
  searchDatabase = require("./models/searchDatabase"),
  bodyParser = require("body-parser"),
  db = require("./db.js"),
  pgp = require("pg-promise")({ noLocking: true }),
  app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("search");
});

app.post("/search", urlencodedParser, function(req, res) {
  var query = req.body.searchinput;
  searchDatabase(query)
    .then(function(returned_data) {
      res.render("search_results", { data: returned_data, query: query });
    })
    .catch(function(e) {
      console.log(e);
    });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("I'M LISTENING #3000!");
});

module.exports = app;
