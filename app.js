const express = require("express");
const ejs = require('ejs')
const app = express();


app.use(express.static('public'))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render('index')
});

app.get("/about", function (req, res) {
  res.render('about')
});

app.get("/add_post", function (req, res) {
  res.render('add_post')
});


const port = 3000;

app.listen(port, () => {
  console.log(`Server started on ${port} port.`);
});
