// DEPENDENCIES

require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./config/db");
connectDB();

// CONFIGURATION
// const { errorHandler } = require("");
const PORT = process.env.PORT || 8070;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// ROUTES
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/inventory", require("./routes/inventoryRoutes"));

app.get("/", (req, res) => {
  console.log("I'm awake");
  res.send("Hello World");
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
