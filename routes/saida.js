const express = require('express');
const router = express.Router();
const models = require('../models');

// Create Saida
router.post('/', async (req, res) => {
  try {
    const { beneficiario_id, descricao, valor_total, categoria_id, comprovante_id } = req.body;
    
    // Cria uma nova saída no banco de dados
    const saida = await models.Saida.create({
      beneficiario_id,
      descricao,
      valor_total,
      categoria_id,
      comprovante_id: comprovante_id || null, // Comprovante é opcional
    });
    
    res.status(201).json(saida); // Retorna a saída criada com status 201
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Saída' });
  }
});

// Retrieve all Saida
router.get('/', async (req, res) => {
  try {
    const saidas = await models.Saida.findAll();
    res.status(200).json(saidas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Saídas' });
  }
});

// Retrieve Saida by ID
router.get('/:id', async (req, res) => {
  try {
    const saida = await models.Saida.findByPk(req.params.id);
    if (!saida) return res.status(404).json({ error: 'Saída não encontrada' });
    res.status(200).json(saida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Saída' });
  }
});

// Update a Saida
router.put('/:id', async (req, res) => {
  try {
    const { beneficiario_id, descricao, valor_total, categoria_id, comprovante_id } = req.body;
    const saida = await models.Saida.findByPk(req.params.id);
    if (!saida) return res.status(404).json({ error: 'Saída não encontrada' });

    // Atualiza os campos
    saida.beneficiario_id = beneficiario_id;
    saida.descricao = descricao;
    saida.valor_total = valor_total;
    saida.categoria_id = categoria_id;
    saida.comprovante_id = comprovante_id || null;

    await saida.save();

    res.status(200).json(saida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Saída' });
  }
});

// Delete a Saida
router.delete('/:id', async (req, res) => {
  try {
    const saida = await models.Saida.findByPk(req.params.id);
    if (!saida) return res.status(404).json({ error: 'Saída não encontrada' });

    await saida.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Saída' });
  }
});

module.exports = router;
