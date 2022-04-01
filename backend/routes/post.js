const express = require("express");
const multer = require("multer");

const { protect } = require("../middleware/authMiddleware");

const {
  getPostList,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  deleteAll,
} = require("../controllers/posts");

const Post = require("../models/postModel");
const router = express.Router();

///////////////

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "uploads"); //cb(error, "backend/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.route("/").get(getPostList);
router.route("/").post(protect, upload.single("image"), createPost);
router.route("/deleteAll").delete(deleteAll);

router.route("/:id").get(getPostById).delete(protect, deletePost);
router.route("/:id").put(protect, upload.single("image"), updatePost);

module.exports = router;
