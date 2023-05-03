// import { SendHandle } from "child_process";
import { Express } from "express";

// const express = require("express");
const express = require("express");
const app = express();
const port = 5500;

class HTTPHandle {
  handler: string;
  constructor(output: string) {
    this.handler = output;
  }
}

async function recieveData() {
  const response = await fetch(
    "https://jorgen-kodehode.github.io/Meme-generator/index.js"
  );
  const jsonData = await response.json();
  console.log(JSON.parse(jsonData));
}
recieveData();
app.get("/", (req: any, res: any) => {
  if (req.get("200")) {
    res.send("Ok");
  } else {
    res.send("HTTP error");
  }
  res.send("Hello world!");
});

app.listen(port, function () {
  console.log(`Listening on port${port}`);
});
