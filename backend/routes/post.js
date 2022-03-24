const express = require("express");
const {
  getPostList,
  getPostById,
  deletePost,
  createPost,
  updatePost,
} = require("../controllers/posts");

const Post = require("../models/postModel");
const router = express.Router();

router.route("/").get(getPostList).post(createPost);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
