const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send(`Bienvenue sur mon API`);
});

module.exports = router;
