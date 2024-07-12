import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('GET completo');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
