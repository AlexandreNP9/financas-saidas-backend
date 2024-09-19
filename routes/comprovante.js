const express = require('express');
const router = express.Router();
const models = require('../models');

// Create Comprovante
router.post('/', async (req, res) => {
  try {
    const { imagem, tipo_id, numero_acesso } = req.body;
    
    const comprovante = await models.Comprovante.create({
      imagem,
      tipo_id,
      numero_acesso,
    });
    
    res.status(201).json(comprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Comprovante' });
  }
});

// Retrieve all Comprovante
router.get('/', async (req, res) => {
  try {
    const comprovantes = await models.Comprovante.findAll();
    res.status(200).json(comprovantes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Comprovantes' });
  }
});

// Retrieve Comprovante by ID
router.get('/:id', async (req, res) => {
  try {
    const comprovante = await models.Comprovante.findByPk(req.params.id);
    if (!comprovante) return res.status(404).json({ error: 'Comprovante não encontrado' });
    res.status(200).json(comprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Comprovante' });
  }
});

// Update a Comprovante
router.put('/:id', async (req, res) => {
  try {
    const { imagem, tipo_id, numero_acesso } = req.body;
    const comprovante = await models.Comprovante.findByPk(req.params.id);
    if (!comprovante) return res.status(404).json({ error: 'Comprovante não encontrado' });

    // Atualiza os campos
    comprovante.imagem = imagem;
    comprovante.tipo_id = tipo_id;
    comprovante.numero_acesso = numero_acesso;

    await comprovante.save();

    res.status(200).json(comprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Comprovante' });
  }
});

// Delete a Comprovante
router.delete('/:id', async (req, res) => {
  try {
    const comprovante = await models.Comprovante.findByPk(req.params.id);
    if (!comprovante) return res.status(404).json({ error: 'Comprovante não encontrado' });

    await comprovante.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Comprovante' });
  }
});

module.exports = router;
