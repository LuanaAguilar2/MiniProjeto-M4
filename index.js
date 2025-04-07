const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`servior rodando em http://localhost:${PORT}`);
});


const locais = [
  {
    id: 1,
    nome: "MM Gerdau - Museu das Minas e do Metal",
    endereco: "Praça da Liberdade, 680 - Funcionários, Belo Horizonte - MG, 30140-010",
    acessibilidades: ["Rampa de acesso", "Banheiro adaptado", "elevadores"]
  },
  {
    id: 2,
    nome: "Mercado novo",
    endereco: "R. Rio Grande do Sul, 499 - Centro, Belo Horizonte - MG, 30180-916",
    acessibilidades: ["Rampa de acesso", "Estacionamento reservado", "Banhiero adptado"]
  },
  {
    id: 3,
    nome: "Inhotim",
    endereco: "Rua dos Estudantes, 789",
    acessibilidades: ["Banheiros adaptados", "Emprestimo de cadeira de rodas", "50 minutos de transporte interno gratuito"]
  }
];

const avaliacoes = [
  { idLocal: 1, usuario: "Clarissa Pereira", nota: 5, data:"20/02/2021", comentario: "Nos deparamos com um prédio belíssimo, de arquitetura antiga bem conservada, em contraste com a tecnologia inovadora, capaz de integrar pessoas de todas as idades e formas. A estrutura é acessível com banheiros adaptados, elevadores e rampas. Também estão disponíveis cadeira de rodas e carrinho de transporte para quem tem dificuldade de se locomover"},

  { idLocal: 1, usuario: "Laura Martins", nota: 5, data: "19/12/2021", comentario: "O Museu das Minas e do Metal é um belo exemplo de arquitetura tombada que recebeu intervenções para que ficasse acessível. O lugar é muito bonito"},

  { idLocal: 3, usuario: "João Martins", nota: 4, data: "12/06/2023", comentario: "O museu é lindo, mas tiveram inumeras artes que eu não consegui ter acesso pois o acesso era por escadas e as artes são acessadas por trilhas e nem sempre os carrinhos pordem buscar você" },

  { idLocal: 3, usuario: "Laura Martins", nota: 4, data: "14/01/2021", comentario: "Não são todas as exposições que uma pessoa cadeirante consegue acessar e o chão é um pouco irregular em alguns locais, mas é um museu a céu aberto lindo e vale a epena" },


  { idLocal: 2, usuario: "Carlos Paixão", nota: 3,data:"03/03/2022", comentario: "São poucas as vagas acessiveis então precisa chegar cedo a rampa é bem estreita e o chão é irregular e algumas lojas ainda possuem degraus na entrada"}
];



// 1. Lista todos os locais acessíveis
app.get("/api/locais-acessiveis", (req, res) => {
  res.json(locais);
});

// 2. Mostra as avaliações de um local específico
app.get("/api/avaliacoes/:idLocal", (req, res) => {
  const id = parseInt(req.params.idLocal);
  const resultado = avaliacoes.filter(a => a.idLocal === id);

  if (resultado.length === 0) {
    return res.status(404).json({ mensagem: "Nenhuma avaliação encontrada para esse local." });
  }

  res.json(resultado);
});

// 3. Retorna os locais com mais avaliações
app.get("/api/locais-acessiveis/mais-avaliados", (req, res) => {
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
});

