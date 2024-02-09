const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: String,
  message: String,
  userName: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
