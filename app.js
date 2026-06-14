const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello my name is ashis bhandari ");
});

app.listen(3000);
