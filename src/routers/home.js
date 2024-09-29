const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send(`Bienvenue sur mon serveur`);
});

module.exports = router;
