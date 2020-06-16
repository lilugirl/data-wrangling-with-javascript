"use strict";
const express = require("express");
const path = require("path");
const generateReport = require("./generate-report");
const app = express();

const staticFilesPath = path.join(__dirname, "public");
const staticFilesMiddleWare = express.static(staticFilesPath);

app.use("/", staticFilesMiddleWare);

const data = [{
  "name": "liuyi",
  "age": "40",
  "sex": "female"
}, {
  "name": "xiaoming",
  "age": "32",
  "sex": "male"
}, ];

app.get("/rest/data", (req, res) => {
  const report = generateReport(data);
  res.json(report);
});

app.listen(3004, () => {
  console.log('Web server listening on port 3004');
})