const express = require("express");
const path = require("path");
const ejs = require("ejs");
const Post = require("./models/Post");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const pageController = require('./controllers/pageController')
const postController = require('./controllers/postController')

const app = express();

// CONNECT DB
mongoose.connect("mongodb://localhost/clean-blog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  }),
);

app.set("view engine", "ejs");

app.get("/", postController.getAllPosts);
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/post/edit/:id", pageController.getEditPage);

app.get("/post/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/post/:id", postController.editPost);
app.delete("/post/:id", postController.deletePost);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on ${port} port.`);
});
