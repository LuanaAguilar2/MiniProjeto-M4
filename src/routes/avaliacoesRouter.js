const express = require("express");
const router = express.Router();
const avaliacoesController = require("../controllers/avaliacoesController");

router.get("/avaliacoes/:idLocal/comentarios", avaliacoesController.listarAvaliacoesPorLocal);

module.exports = router;

