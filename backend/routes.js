const express = require('express');
const router = express.Router();
const db = require('./bdd'); // Importa el archivo de configuración de la base de datos

// Ruta para obtener los datos de los productos de la base de datos
router.get('/api/datos', (req, res) => {
  // Realiza la consulta a la base de datos para obtener los datos necesarios
  db.query('SELECT * FROM producto', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los datos de la base de datos' });
    } else {
      res.json(results); // Devuelve los datos obtenidos de la base de datos como respuesta
    }
  });
});

// Ruta para guardar el producto
router.post('/productos', (req, res) => {
  const { nombre, imagen, descripcion, precio, stock } = req.body;

  // Realiza la inserción en la base de datos
  const query = 'INSERT INTO producto (nombre, imagen, descripcion, precio, stock) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, imagen, descripcion, precio, stock];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al guardar el producto:', error);
      res.status(500).json({ message: 'Error al guardar el producto' });
    } else {
      console.log('Producto guardado exitosamente');
      res.status(200).json({ message: 'Producto guardado exitosamente' });
    }
  });
});

module.exports = router;

