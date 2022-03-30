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
    res.json({
      message: "Fetch successfully",
      post,
    });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: "Post deleted" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

// @desc    Create a post
// @route   POST /api/posts
const createPost = asyncHandler(async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(url + "/uploads/" + req.file.filename);
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/uploads/" + req.file.filename,
    creator: req.userData._id
  });
  const createdPost = await post.save();
  res.status(201).json({
    message: "Post added successfully",
    ...createdPost._doc,
    id:createdPost._doc._id
  });
});

// @desc    Update a post
// @route   PUT /api/posts/:id

const updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/uploads/" + req.file.filename;
  }
  const postExit = await Post.findById(req.params.id);
  if (postExit) {
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath,
      creator: req.userData._id
    });
    // postExit.title = title;
    // postExit.content = content;
    // postExit.imagePath = imagePath;
    // postExit.creator = req.userData._id
    // const updatedPost = await postExit.save();
    await Post.updateOne({ _id: req.params.id, creator: req.userData._id }, post)
    res.status(200).json({ message: "Update successful!" });
  } else {
    res.status(401);
    throw new Error("Post not found");
  }
});

module.exports = {
  getPostList,
  getPostById,
  deletePost,
  createPost,
  updatePost,
};
