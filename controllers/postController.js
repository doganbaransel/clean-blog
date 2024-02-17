const Post = require("./models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
  console.log(post.message);
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  console.log(req.body);
  res.redirect("/");
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    post.name = req.body.name;
    post.message = req.body.message;
    post.userName = req.body.userName;
    await post.save(); // await anahtar kelimesi ile save() işleminin tamamlanmasını bekleyin

    res.redirect(`/post/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Veri güncelleme işlemi sırasında bir hata oluştu.");
  }
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove({ _id: req.params.id });

  res.redirect("/");
};
