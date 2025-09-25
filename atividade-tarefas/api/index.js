require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de tarefas funcionando!');
});

const tarefasRoutes = require('./routes/tarefasRoutes');
app.use('/tarefas', tarefasRoutes);

module.exports.handler = serverless(app);


