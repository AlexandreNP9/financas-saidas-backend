const express = require('express');
const router = express.Router();
const models = require('../models');

// Create categoriaItem
router.post('/', async (req, res) => {
  try {
    const { descricao } = req.body;
    const categoriaItem = await models.CategoriaItem.create({ descricao });
    res.status(201).json(categoriaItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Categoria de Item' });
  }
});

// Retrieve all categoriaItem
router.get('/', async (req, res) => {
  try {
    const categoriaItem = await models.CategoriaItem.findAll();
    res.status(200).json(categoriaItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Categorias de Itens' });
  }
});

// Retrieve categoriaItem by ID
router.get('/:id', async (req, res) => {
  try {
    const categoriaItem = await models.CategoriaItem.findByPk(req.params.id);
    if (!categoriaItem) return res.status(404).json({ error: 'Categoria Item não encontrada' });
    res.status(200).json(categoriaItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Categoria de Item' });
  }
});

// Update a categoriaItem
router.put('/:id', async (req, res) => {
  try {
    const { descricao } = req.body;
    const categoriaItem = await models.CategoriaItem.findByPk(req.params.id);
    if (!categoriaItem) return res.status(404).json({ error: 'Categoria de Item não encontrada' });

    categoriaItem.descricao = descricao;
    await categoriaItem.save();

    res.status(200).json(categoriaItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Categoria de Item' });
  }
});

// Delete a categoriaItem
router.delete('/:id', async (req, res) => {
  try {
    const categoriaItem = await models.CategoriaItem.findByPk(req.params.id);
    if (!categoriaItem) return res.status(404).json({ error: 'Categoria de Item não encontrada' });

    await categoriaItem.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Categoria de Item' });
  }
});

module.exports = router;
