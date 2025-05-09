const express = require('express');
const router = express.Router();

// Exemplo de rota para buscar dados fictícios de doenças
router.get('/casos', (req, res) => {
  const dados = [
    { id: 1, nome: 'Dengue', confirmados: 1200, obitos: 10 },
    { id: 2, nome: 'Covid-19', confirmados: 900, obitos: 15 },
    { id: 3, nome: 'Zika', confirmados: 400, obitos: 2 }
  ];

  res.json(dados);
});

// Rota de exemplo para buscar notícias (futura integração)
router.get('/noticias', (req, res) => {
  res.json([
    { titulo: 'Surto de Dengue no RJ', fonte: 'G1', data: '2025-04-05' },
    { titulo: 'Novo vírus detectado na Amazônia', fonte: 'Fiocruz', data: '2025-04-04' }
  ]);
});

module.exports = router;
