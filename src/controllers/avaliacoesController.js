const { avaliacoes } = require("../models/dados");

function listarAvaliacoesPorLocal(req, res) {
  const idLocal = parseInt(req.params.idLocal);
  const comentariosLocal = avaliacoes.filter(a => a.idLocal === idLocal);

  if (comentariosLocal.length === 0) {
    return res.status(404).json({ mensagem: "Nenhuma avaliação encontrada para esse local." });
  }

  res.json(comentariosLocal);
}

module.exports = {
  listarAvaliacoesPorLocal
};