const express = require('express');
const router = express.Router();
const models = require('../models');

// Create categoriaSaida
router.post('/', async (req, res) => {
  try {
    const { descricao } = req.body;
    const categoriaSaida = await models.CategoriaSaida.create({ descricao });
    res.status(201).json(categoriaSaida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Categoria de Saída' });
  }
});

// Retrieve all categoriaSaida
router.get('/', async (req, res) => {
  try {
    const categoriaSaida = await models.CategoriaSaida.findAll();
    res.status(200).json(categoriaSaida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Categorias de Saidas' });
  }
});

// Retrieve categoriaSaida by ID
router.get('/:id', async (req, res) => {
  try {
    const categoriaSaida = await models.CategoriaSaida.findByPk(req.params.id);
    if (!categoriaSaida) return res.status(404).json({ error: 'Categoria de Saída não encontrada' });
    res.status(200).json(categoriaSaida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Categorias de Saídas' });
  }
});

// Update a categoriaSaida
router.put('/:id', async (req, res) => {
  try {
    const { descricao } = req.body;
    const categoriaSaida = await models.CategoriaSaida.findByPk(req.params.id);
    if (!categoriaSaida) return res.status(404).json({ error: 'Categoria de Saída não encontrada' });

    categoriaSaida.descricao = descricao;
    await categoriaSaida.save();

    res.status(200).json(categoriaSaida);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Categoria de Saída' });
  }
});

// Delete a categoriaSaida
router.delete('/:id', async (req, res) => {
  try {
    const categoriaSaida = await models.CategoriaSaida.findByPk(req.params.id);
    if (!categoriaSaida) return res.status(404).json({ error: 'Categoria de Saída não encontrada' });

    await categoriaSaida.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Categoria de Saída' });
  }
});

module.exports = router;
