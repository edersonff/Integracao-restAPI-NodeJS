# INTEGRAÇÃO-RESTAPI-NODEJ

## Inicialização

### Pré-requisitos

- Node.js v13
- Servidor MySQL
- Servidor PostgreSQL
- Clone do projeto

### Comandos

1. Abra interface de comando dentro da pasta
2. Sobrescreva as informações do arquivo `/database/mysql.js` para conexão do servidor com o banco de dados MySQL
2. Sobrescreva as informações do arquivo `/database/postgresql.js` para conexão do servidor com o banco de dados PostgreSQL
2. Ultilize `npm install` para instalar os modulos externos
2. Digite `npm run config` para a primeira incialização
- Digite `npm start` para as seguintes inicializações

## Detalhes

### Rotas

```
 - /produtos -
[GET] '/' - INDEX
[GET] '/:ID' - SHOW
[POST] '/:ID' - STORE
[PATCH] '/:ID' - UPDATE
[DELETE] '/:ID' - DESTROY

 - /categorias -
[GET] '/' - INDEX
[GET] '/:ID' - SHOW
[POST] '/:ID' - STORE
[PATCH] '/:ID' - UPDATE
[DELETE] '/:ID' - DESTROY

 - /categorias/:id/estoque -
[GET] '/' - INDEX
[PATCH] '/' - UPDATE
[DELETE] '/' - DESTROY
```

### Problemas

- Não há integração nativa do sequelize ou de outras ferrametas de integração para com banco de dados
- Não há função nativa do sequelize ou de outras ferrametas de exportar dados para com banco de dados
- Primeira vez ultilizando PostgreSQL
- Diferentes formatações entre MySQL e PostgreSQL
- Dificuldade para juntar end-points
- Constantes erros de portas intalação do banco de dados PostgreSQL

### Destaques

- Middleware customizado para cada endpoint
- Agendamento para exportar dados (MySQL->PostgreSQL)
- Arquivos separados para primeira inicialização (criar tabelas com `sync({force: true})`) e também exportação de possiveis dados.
- Helper customizado para fazer integração entre models

### Recursos

- [x] Models
- [x] Rotas
- [x] Conexão com PostgreSQL e mysql
- [X] Integração postgresql e mysql
- [x] Intervalo para integração de dados

### Modulos ultilizadas

1. **Express -** Ultilizações de funções como: formatação para obter corpo das requisões corretamente, controladores, rotas, middlewares.
2. **Joi -** Para filtrar dados através de schemas, ultilizado no middleware que verifica o corpo da requisição e dados enviados pelo cliente.
3. **Cors -** Ultilizado para configurações como: status http padrão para sucesso e origem unica aceita(normalmente para restAPIs)
4. **Sequelize -** ORM ultilizado no projeto, fazendo a conexão com MySQL e o PostgreSQL.
5. **MySQL2 -** Apenas para ter compatibilidade com o Sequelize.
6. **[DEV] Nodemon -** Para atualização automatica após alteração no codigo.
