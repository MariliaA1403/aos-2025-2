import express from 'express';
import dotenv from 'dotenv';
import tarefasRoutes from './routes/tarefasRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// rota raiz
app.get('/', (req, res) => {
  res.send('API rodando com sucesso!');
});

// rotas de tarefas
app.use('/tarefas', tarefasRoutes);

// iniciar servidor local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

export default app;
