const express = require("express");
const router = express.Router();
const locaisController = require("../controllers/locaisController");

router.get("/locais-acessiveis", locaisController.listarLocais);
router.get("/locais-acessiveis/mais-avaliados", locaisController.locaisMaisAvaliados);

module.exports = router;