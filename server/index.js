const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello to my app");
});

app.get("/signup", (req, res) => {
  res.json("Hello to my app");
});

app.listen(PORT, () => {
  console.log("server running on PORT " + PORT);
});
