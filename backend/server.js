const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', dataRoutes);

// Porta
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
