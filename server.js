import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Obtener el nombre del archivo y el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta simple
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/carrito', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'carrito.html'));
});
app.get('/favoritos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favoritos.html'));
});
app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});
app.get('/tienda', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tienda.html'));
});
// Inicia el servidor
app.listen(3000, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});

/*
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/tienda', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/favoritos', (req, res) => {
  res.sendFile(__dirname + '/public/favoritos.html');
});
app.get('/carrito', (req, res) => {
  res.sendFile(__dirname + '/public/carrito.html');
});
app.get('/perfil', (req, res) => {
  res.sendFile(__dirname + '/public/perfil.html');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/tienda.html');
});
*/
