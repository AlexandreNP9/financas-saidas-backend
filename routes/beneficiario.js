const express = require('express');
const router = express.Router();
const models = require('../models');

// Create beneficiario
router.post('/', async (req, res) => {
  try {
    const { numero_identificacao, nome } = req.body;
    const beneficiario = await models.Beneficiario.create({ numero_identificacao, nome });
    res.status(201).json(beneficiario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Beneficiário' });
  }
});

// Retrieve all beneficiario
router.get('/', async (req, res) => {
  try {
    const beneficiarios = await models.Beneficiario.findAll();
    res.status(200).json(beneficiarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Beneficiários' });
  }
});

// Retrieve beneficiario by ID
router.get('/:id', async (req, res) => {
  try {
    const beneficiario = await models.Beneficiario.findByPk(req.params.id);
    if (!beneficiario) return res.status(404).json({ error: 'Beneficiário não encontrado' });
    res.status(200).json(beneficiario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Beneficiário' });
  }
});

// Update beneficiario
router.put('/:id', async (req, res) => {
  try {
    const { numero_identificacao, nome } = req.body;
    const beneficiario = await models.Beneficiario.findByPk(req.params.id);
    if (!beneficiario) return res.status(404).json({ error: 'Beneficiário não encontrado' });

    beneficiario.numero_identificacao = numero_identificacao;
    beneficiario.nome = nome;
    await beneficiario.save();

    res.status(200).json(beneficiario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Beneficiário' });
  }
});

// Delete beneficiario
router.delete('/:id', async (req, res) => {
  try {
    const beneficiario = await models.Beneficiario.findByPk(req.params.id);
    if (!beneficiario) return res.status(404).json({ error: 'Beneficiário não encontrado' });

    await beneficiario.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Beneficiário' });
  }
});

module.exports = router;
