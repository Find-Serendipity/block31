const pets = require("./database");
const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send(
    "Welcome to my Pet API. Please feel free to GET as many pets as you'd like!"
  );
});

// GET - all pets - '/api/v1/pets'
app.get("/api/v1/pets", (_, res) => {
  res.send(pets);
});

// GET - pet by owners name - '/api/v1/pets/owner'
app.get("/api/v1/pets-query", (req, res) => {
  const petOwner = req.query.owner;
  const ownersPets = pets.filter((pet) => pet.owner === petOwner);
  res.send(ownersPets);
});

// GET - pet by id - '/api/v1/pets/:name'
app.get("/api/v1/pets/:name", (req, res) => {
  const name = req.params.name;
  const singlePet = pets.find((pet) => pet.name === name);
  res.send(singlePet);
});

app.listen(8080, () => {
  console.log(`I can hear you on port 8080`);
});
