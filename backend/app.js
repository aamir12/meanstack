const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const serverConfig = require("./config/config.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.use(cors());
  app.use(morgan("dev"));
} else {
  const whitelist = serverConfig.allowOrigins;
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

  app.use(cors(corsOptions));
}

//custom cors solution
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,POST,PATCH,DELETE,OPTIONS"
//   );
//   next();
// });

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "01",
      title: "First title",
      content: "This is coming from server",
    },
    {
      id: "02",
      title: "Second title",
      content: "This is coming from server",
    },
  ];

  res.status(200).json({ message: "Fetch post list successfully", posts });
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(200).json({
    message: "Post added successfully",
  });
});

module.exports = app;
