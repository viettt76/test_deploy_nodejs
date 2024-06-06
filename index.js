const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Trang chu");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(port, (req, res) => {
  console.log("Server listening on port " + port);
});
