const express = require("express");
const router = express.Router();

const fruits = [
  "pomme",
  "banane",
  "orange",
  "fraise",
  "kiwi",
  "raisin",
  "poire",
  "ananas",
];

router.get("/", (_, res) => {
  res.json(fruits);
});

router.get("/:fruitName", (req, res) => {
  const fruitName = req.params.fruitName.toLowerCase();
  const fruit = fruits.find((f) => f.toLowerCase() === fruitName);

  if (fruit) {
    res.send(`Fruit trouvé : ${fruit}`);
  } else {
    res.status(404).send(`Fruit ${fruitName} non trouvé`);
  }
});

module.exports = router;
