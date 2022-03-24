const express = require("express");
const {
  getPostList,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

const Post = require("../models/postModel");
const router = express.Router();

router.route("/").get(getPostList).post(createPost);

router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
