const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

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

// Rota para cadastrar uma nova saída
app.post('/saida', async (req, res) => {
  try {
    const { descricao, valor_total, beneficiario_id, categoria_id, comprovante_id } = req.body;
    const saida = await models.Saida.create({
      descricao,
      valor_total,
      beneficiario_id,
      categoria_id,
      comprovante_id
    });
    res.status(201).json(saida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar saída' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
