const http = require("http");
const colors = require("colors");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config({
  path: "./backend/config/config.env",
});

const debug = require("debug")("node-angular");
const app = require("./backend/app");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dist/mean/")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "dist", "mean", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof PORT === "string" ? "pipe " + PORT : "port " + PORT;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof PORT === "string" ? "pipe " + PORT : "port " + PORT;
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
  debug("Listening on " + bind);
};

const PORT = normalizePort(process.env.PORT || "3000");
app.set("port", PORT);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(PORT);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
