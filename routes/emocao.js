const express = require('express');
const router = express.Router();
const models = require('../models');

// Create emocao
router.post('/', async (req, res) => {
  try {
    const { descricao } = req.body;
    const emocao = await models.Emocao.create({ descricao });
    res.status(201).json(emocao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Emoção' });
  }
});

// Retrieve all emocao
router.get('/', async (req, res) => {
  try {
    const emocao = await models.Emocao.findAll();
    res.status(200).json(emocao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Emoções' });
  }
});

// Retrieve emocao by ID
router.get('/:id', async (req, res) => {
  try {
    const emocao = await models.Emocao.findByPk(req.params.id);
    if (!emocao) return res.status(404).json({ error: 'Emoções não encontradas' });
    res.status(200).json(emocao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Emoção' });
  }
});

// Update a emocao
router.put('/:id', async (req, res) => {
  try {
    const { descricao } = req.body;
    const emocao = await models.Emocao.findByPk(req.params.id);
    if (!emocao) return res.status(404).json({ error: 'Emoção não encontrada' });

    emocao.descricao = descricao;
    await emocao.save();

    res.status(200).json(emocao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Emoção' });
  }
});

// Delete a emocao
router.delete('/:id', async (req, res) => {
  try {
    const emocao = await models.Emocao.findByPk(req.params.id);
    if (!emocao) return res.status(404).json({ error: 'Emoção não encontrada' });

    await emocao.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Emoção' });
  }
});

module.exports = router;
