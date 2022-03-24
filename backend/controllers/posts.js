const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel.js");

// @desc    Fetch all posts
// @route   GET /api/getPostList
// @access  Public
const getPostList = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts,
  });
});

// @desc    Fetch single post
// @route   GET /api/posts/:id
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Post removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Create a post
// @route   POST /api/posts
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc    Update a product
// @route   PUT /api/posts/:id

const updateProduct = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.findById(req.params.id);
  if (post) {
    post.title = title;
    post.content = content;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getPostList,
  getPostById,
  deletePost,
  createPost,
  updateProduct,
};
