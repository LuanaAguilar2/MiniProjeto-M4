const { locais, avaliacoes } = require("../models/dados");

const listarLocais = (req, res) => {
  res.json(locais);
};

const locaisMaisAvaliados = (req, res) => {
  const contagem = locais.map(local => {
    const count = avaliacoes.filter(a => a.idLocal === local.id).length;
    return {
      id: local.id,
      nome: local.nome,
      avaliacoesCount: count
    };
  });

  const ordenados = contagem.sort((a, b) => b.avaliacoesCount - a.avaliacoesCount);
  res.json(ordenados);
};

module.exports = {
  listarLocais,
  locaisMaisAvaliados
};
