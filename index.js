const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const beneficiarioRoutes = require('./routes/beneficiario');
const categoriaSaidaRoutes = require('./routes/categoriaSaida');
// Outras rotas...

const app = express();
app.use(bodyParser.json());

// Testar a conexão com o banco de dados
models.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Usar as rotas criadas
app.use('/beneficiarios', beneficiarioRoutes);
app.use('/categorias-saida', categoriaSaidaRoutes);
// Outras rotas...

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
