const express = require('express');
const router = express.Router();
const models = require('../models');

// Create tipoComprovante
router.post('/', async (req, res) => {
  try {
    const { descricao } = req.body;
    const tipoComprovante = await models.TipoComprovante.create({ descricao });
    res.status(201).json(tipoComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Tipo de Comprovante' });
  }
});

// Retrieve all tipoComprovante
router.get('/', async (req, res) => {
  try {
    const tipoComprovante = await models.TipoComprovante.findAll();
    res.status(200).json(tipoComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Tipos de Comprovantes' });
  }
});

// Retrieve tipoComprovante by ID
router.get('/:id', async (req, res) => {
  try {
    const tipoComprovante = await models.TipoComprovante.findByPk(req.params.id);
    if (!tipoComprovante) return res.status(404).json({ error: 'Tipo de Comprovante não encontrado' });
    res.status(200).json(tipoComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Tipo de Comprovante' });
  }
});

// Update a tipoComprovante
router.put('/:id', async (req, res) => {
  try {
    const { descricao } = req.body;
    const tipoComprovante = await models.TipoComprovante.findByPk(req.params.id);
    if (!tipoComprovante) return res.status(404).json({ error: 'Tipo de Comprovante não encontrado' });

    tipoComprovante.descricao = descricao;
    await tipoComprovante.save();

    res.status(200).json(tipoComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Tipo de Comprovante' });
  }
});

// Delete a tipoComprovante
router.delete('/:id', async (req, res) => {
  try {
    const tipoComprovante = await models.TipoComprovante.findByPk(req.params.id);
    if (!tipoComprovante) return res.status(404).json({ error: 'Tipo de Comprovante não encontrado' });

    await tipoComprovante.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Tipo de Comprovante' });
  }
});

module.exports = router;
