const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello my name is ashish bhandari and iam from HP");
});

app.listen(3000);
