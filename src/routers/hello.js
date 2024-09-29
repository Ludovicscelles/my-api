const express = require("express");
const router = express.Router();

router.get("/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Bienvenue ${name}`);
});

module.exports = router;
