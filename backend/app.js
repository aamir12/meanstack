const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/db.js");

//connect to database
connectDB();

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
      if (!origin || whitelist.indexOf(origin) !== -1) {
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

const postRoutes = require("./routes/post");

app.use("/api/posts", postRoutes);

//configuration for static file

app.use(notFound);
app.use(errorHandler);

// app.get("/api/posts", (req, res, next) => {
//   res.status(200).json({ message: "Fetch post list successfully", posts });
// });

// app.post("/api/posts", (req, res, next) => {
//   const post = req.body;
//   console.log(post);
//   res.status(200).json({
//     message: "Post added successfully",
//   });
// });

module.exports = app;
