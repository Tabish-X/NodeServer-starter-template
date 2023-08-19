// ***** IMPORTS
require("dotenv").config({ path: "config.env" });
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// **** ENVIRONMENTAL VARIABLES
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// **** MIDDLEWARES
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// **** ROUTES
app.use("/public", express.static(__dirname + "/public"));
const indexRoute = require("./routes/index");
app.use("/", indexRoute); // index route

// **** SERVER STARTING
const server = (message) => {
  return app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
    console.log(message);
  });
};

// **** MONGODB CONNECTION
mongoose
  .connect(MONGO_URI)
  .then(() => {
    server("mongodb has been connected with server");
  })
  .catch((error) => {
    console.log({ ERROR: error.message });
  });
