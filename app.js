// import dotenv and create an instance of dotenv to enable us use our environment variables
require("dotenv").config();

// import express
const express = require("express");

// create an instance of express
const app = express();

// export connectDB from db
const connectDB = require("./config/db");
connectDB();

// middleware
app.use(express.json());

// import router from routes
const drinks_routes = require("./routes/drinks.routes");

app.get("/", (req, res) => {
  res.send("<h1><b>Welcome to KweenX 😍😍😍</b></h1>");
});

app.use("/api", drinks_routes);

app.all("*", (req, res) => {
  res
    .status(404)
    .send("Oops 😟 Sorry the page your are looking for does not exist");
});

// export app to server
module.exports = app;
