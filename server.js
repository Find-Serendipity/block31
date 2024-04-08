const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Howdy");
});

// GET - all pets - '/api/v1/pets'
app.get("/api/v1/pets", (req, res) => {
  res.send("Hello World!");
});

// GET - pet by owner name - '/api/v1/pets/owner'
app.get("/api/v1/pets-query", (req, res) => {
  const owner = req.query.owner;
  res.send(`Your person, ${owner}, is pretty cool too!`);
});

// GET - pet by id - '/api/v1/pets/:name'
app.get("/api/v1/pets/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Who's a good pet? You! ${name} is the bestest pet ever!`);
});

app.listen(8080, () => {
  console.log(`I can hear you on port 8080`);
});
