const express = require("express");
const router = express.Router();

const vegetables = [
  "carotte",
  "brocoli",
  "courgette",
  "épinard",
  "chou-fleur",
  "poivron",
  "tomate",
  "aubergine",
  "concombre",
  "haricot",
];

router.get("/", (_, res) => {
  res.json(vegetables);
});

router.get("/:vegetableName", (req, res) => {
  const vegetableName = req.params.vegetableName.toLocaleLowerCase();
  const vegetable = vegetables.find(
    (f) => f.toLocaleLowerCase() === vegetableName
  );
  if (vegetable) {
    res.send(`Légume trouvé : ${vegetable}`);
  } else {
    res.status(404).send(`Légum ${vegetableName} non trouvé`);
  }
});

module.exports = router;
