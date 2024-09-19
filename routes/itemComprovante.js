const express = require('express');
const router = express.Router();
const models = require('../models');

// Create ItemComprovante
router.post('/', async (req, res) => {
  try {
    const { descricao, codigo_produto, quantidade, unidade_referencia, valor_unitario, valor_total, categoria_item_id, emocao_id, comprovante_id } = req.body;
    
    const itemComprovante = await models.ItemComprovante.create({
      descricao, 
      codigo_produto, 
      quantidade, 
      unidade_referencia, 
      valor_unitario, 
      valor_total, 
      categoria_item_id, 
      emocao_id, 
      comprovante_id,
    });
    
    res.status(201).json(itemComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar Item do Comprovante' });
  }
});

// Retrieve all ItemComprovante
router.get('/', async (req, res) => {
  try {
    const itensComprovante = await models.ItemComprovante.findAll();
    res.status(200).json(itensComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar Itens do Comprovante' });
  }
});

// Retrieve ItemComprovante by ID
router.get('/:id', async (req, res) => {
  try {
    const itemComprovante = await models.ItemComprovante.findByPk(req.params.id);
    if (!itemComprovante) return res.status(404).json({ error: 'Item do Comprovante não encontrado' });
    res.status(200).json(itemComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Item do Comprovante' });
  }
});

// Update a ItemComprovante
router.put('/:id', async (req, res) => {
  try {
    const { descricao, codigo_produto, quantidade, unidade_referencia, valor_unitario, valor_total, categoria_item_id, emocao_id, comprovante_id } = req.body;
    const itemComprovante = await models.ItemComprovante.findByPk(req.params.id);
    if (!itemComprovante) return res.status(404).json({ error: 'Item do Comprovante não encontrado' });

    // Atualiza os campos
    itemComprovante.descricao = descricao;
    itemComprovante.codigo_produto = codigo_produto;
    itemComprovante.quantidade = quantidade;
    itemComprovante.unidade_referencia = unidade_referencia;
    itemComprovante.valor_unitario = valor_unitario;
    itemComprovante.valor_total = valor_total;
    itemComprovante.categoria_item_id = categoria_item_id;
    itemComprovante.emocao_id = emocao_id;
    itemComprovante.comprovante_id = comprovante_id;

    await itemComprovante.save();

    res.status(200).json(itemComprovante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Item do Comprovante' });
  }
});

// Delete a ItemComprovante
router.delete('/:id', async (req, res) => {
  try {
    const itemComprovante = await models.ItemComprovante.findByPk(req.params.id);
    if (!itemComprovante) return res.status(404).json({ error: 'Item do Comprovante não encontrado' });

    await itemComprovante.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar Item do Comprovante' });
  }
});

module.exports = router;
