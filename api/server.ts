import express from "express";
// const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, function () {
  console.log(`Listening on port${port}`);
});
