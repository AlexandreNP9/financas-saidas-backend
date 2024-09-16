# Finanças Saídas Backend

Este é o backend para o sistema de gerenciamento de saídas financeiras. O projeto é construído utilizando Node.js e Sequelize para interação com o banco de dados MySQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para Node.js que facilita a criação de APIs.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que facilita a interação com bancos de dados SQL.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar dados.
- **Nodemon**: Ferramenta que monitora mudanças no código e reinicia o servidor automaticamente.

## Pré-requisitos

Antes de rodar o servidor, você precisa ter:

- [Node.js](https://nodejs.org/) instalado em seu computador.
- [MySQL Workbench](https://www.mysql.com/products/workbench/) instalado e configurado para criar um banco de dados.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/AlexandreNP9/financas-saidas-backend.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd financas-saidas-backend
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Instale o pacote `mysql2`:

   ```bash
   npm install mysql2
   ```

## Configuração do Banco de Dados

1. Abra o MySQL Workbench e crie um novo banco de dados para o projeto.
2. Execute o script SQL fornecido para criar as tabelas necessárias.

## Executando o Servidor

Para rodar o servidor, utilize o seguinte comando:

```bash
npx nodemon index.js
```

O servidor estará rodando na porta padrão (3000). Você pode acessar as rotas da API através do navegador ou de ferramentas como Postman.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Para isso, crie uma nova branch, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
