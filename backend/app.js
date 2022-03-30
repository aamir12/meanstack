const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
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
const userRoutes = require("./routes/user");
//routes
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

//configuration for static file
app.use("/uploads", express.static(path.join("backend/uploads")));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
