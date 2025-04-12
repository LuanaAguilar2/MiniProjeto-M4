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
      {locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Clarissa Pereira", nota: 5, data:"20/02/2021", comentario: "Nos deparamos com um prédio belíssimo, de arquitetura antiga bem conservada, em contraste com a tecnologia inovadora, capaz de integrar pessoas de todas as idades e formas. A estrutura é acessível com banheiros adaptados, elevadores e rampas. Também estão disponíveis cadeira de rodas e carrinho de transporte para quem tem dificuldade de se locomover"},
      
      {locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Laura Martins", nota: 5, data: "19/12/2021", comentario: "O Museu das Minas e do Metal é um belo exemplo de arquitetura tombada que recebeu intervenções para que ficasse acessível. O lugar é muito bonito"},
      
      {locais:"Inhotim" ,idLocal: 3, usuario: "João Martins", nota: 4, data: "12/06/2023", comentario: "O museu é lindo, mas tiveram inumeras artes que eu não consegui ter acesso pois o acesso era por escadas e as artes são acessadas por trilhas e nem sempre os carrinhos pordem buscar você" },
    
      {locais:"Inhotim" ,idLocal: 3, usuario: "Laura Martins", nota: 4, data: "14/01/2021", comentario: "Não são todas as exposições que uma pessoa cadeirante consegue acessar e o chão é um pouco irregular em alguns locais, mas é um museu a céu aberto lindo e vale a epena" },
    
      
      {locais:"Mercado novo",idLocal: 2, usuario: "Carlos Paixão", nota: 3,data:"03/03/2022", comentario: "São poucas as vagas acessiveis então precisa chegar cedo a rampa é bem estreita e o chão é irregular e algumas lojas ainda possuem degraus na entrada"}
        ];
  
  module.exports = { locais, avaliacoes };
  