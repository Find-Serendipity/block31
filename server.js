const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Howdy");
});

app.get("/pets", (req, res) => {
  res.send("Hello World!");
});

app.get("/pets/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Who's a good pet? You! ${name} is the bestest pet ever!`);
});

app.get("/pets/:name/:owner", (req, res) => {
  const owner = req.params.owner;
  res.send(`Your person, ${owner}, is pretty cool too!`);
});

app.listen(8080, () => {
  console.log(`I can hear you on port 8080`);
});
