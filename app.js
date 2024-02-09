const express = require("express");
const path = require('path')
const ejs = require('ejs')
const Post = require('./models/Post')
const mongoose = require('mongoose')


const app = express();


// CONNECT DB
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", async (req, res) =>{
  const posts = await Post.find({})
  res.render('index',{
    posts
  })
});

app.get("/about",  (req, res) =>{
  res.render('about')
});

app.get("/add_post",  (req, res) => {
  res.render('add_post')
});


app.post("/posts", async (req, res) =>{
  await Post.create(req.body)
  console.log(req.body)
  res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on ${port} port.`);
});
