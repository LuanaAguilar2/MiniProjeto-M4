# MiniProjeto-M4
👀 Visão Geral
Está api foi desenvolvida em JavaScript/Node.js e fornece acesso a lugares acessiveis em Belo Horizonte-MG, pesquisa de comentários para um lugar especifico e permite ver os lugares mais bem avaliados.

🔗Base URL
http://localhost:3000/api/locais-acessiveis

http://localhost:3000/api/locais-acessiveis/mais-avaliados

http://localhost:3000/api/avaliacoes/:idLocal/comentarios

📍Rotas

1. Listar todos os locais cadastrados
GET /locais

Retorna a lista completa de locais cadastrados na API, incluindo os dados do local e avaliações feitas pelos usuários.

Exemplo de resposta:

<pre> ```json [{locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Clarissa Pereira", nota: 5, data:"20/02/2021", comentario: "Nos deparamos com um prédio belíssimo, de arquitetura antiga bem conservada, em contraste com a tecnologia inovadora, capaz de integrar pessoas de todas as idades e formas. A estrutura é acessível com banheiros adaptados, elevadores e rampas. Também estão disponíveis cadeira de rodas e carrinho de transporte para quem tem dificuldade de se locomover"},
      
{locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Laura Martins", nota: 5, data: "19/12/2021", comentario: "O Museu das Minas e do Metal é um belo exemplo de arquitetura tombada que recebeu intervenções para que ficasse acessível. O lugar é muito bonito"}]``` </pre>

2. Listar locais mais avaliados
GET /locais/mais-avaliados

Retorna os locais que receberam o maior número de avaliações, ordenados do mais para o menos avaliado.

Exemplo de resposta:

<pre> ```json[{locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Clarissa Pereira", nota: 5, data:"20/02/2021", comentario: "Nos deparamos com um prédio belíssimo, de arquitetura antiga bem conservada, em contraste com a tecnologia inovadora, capaz de integrar pessoas de todas as idades e formas. A estrutura é acessível com banheiros adaptados, elevadores e rampas. Também estão disponíveis cadeira de rodas e carrinho de transporte para quem tem dificuldade de se locomover"}]``` </pre>

3. Listar comentários de um local específico
GET /locais/:id/comentarios

Retorna os comentários e avaliações feitas para um local específico, utilizando o id do local como parâmetro.

Exemplo de resposta:

<pre> ```json[{locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Clarissa Pereira", nota: 5, data:"20/02/2021", comentario: "Nos deparamos com um prédio belíssimo, de arquitetura antiga bem conservada, em contraste com a tecnologia inovadora, capaz de integrar pessoas de todas as idades e formas. A estrutura é acessível com banheiros adaptados, elevadores e rampas. Também estão disponíveis cadeira de rodas e carrinho de transporte para quem tem dificuldade de se locomover"},

{locais: "MM Gerdau - Museu das Minas e do Metal" ,idLocal: 1, usuario: "Laura Martins", nota: 5, data: "19/12/2021", comentario: "O Museu das Minas e do Metal é um belo exemplo de arquitetura tombada que recebeu intervenções para que ficasse acessível. O lugar é muito bonito"}]``` </pre>

➡️ Pontos Finais
Esta API tem como objetivo facilitar o acesso a informações sobre locais acessíveis em Belo Horizonte, promovendo a inclusão e a mobilidade para todas as pessoas. Com as rotas disponíveis, é possível consultar locais, visualizar os mais avaliados e acessar comentários detalhados de cada espaço.