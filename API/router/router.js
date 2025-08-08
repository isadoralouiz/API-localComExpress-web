const express = require('express');
const router = express.Router;
const pessoas = require('./data/sample.data')

//lugar onde retorna todas as pessoas
router.get('/pessoas', (req, res) => {
    res.json(pessoas);
})

router.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id === id);
    if (!pessoa) {
      return res.status(404).json({ erro: 'Pessoa não encontrada' });
    }
    res.json(pessoa);
  });
  
  module.exports = router;