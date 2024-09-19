const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const beneficiarioRoute = require('./routes/beneficiario');
const categoriaItemRoute = require('./routes/categoriaItem');
const categoriaSaidaRoute = require('./routes/categoriaSaida');
const comprovanteRoute = require('./routes/comprovante');
const emocaoRoute = require('./routes/emocao');
const itemComprovanteRoute = require('./routes/itemComprovante');
const saidaRoute = require('./routes/saida');
const tipoComprovanteRoute = require('./routes/tipoComprovante');

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
app.use('/beneficiario', beneficiarioRoute);
app.use('/categoriaItem', categoriaItemRoute);
app.use('/categoriaSaida', categoriaSaidaRoute);
app.use('/comprovante', comprovanteRoute);
app.use('/emocao', emocaoRoute);
app.use('/itemComprovante', itemComprovanteRoute);
app.use('/saida', saidaRoute);
app.use('/tipoComprovante', tipoComprovanteRoute);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
