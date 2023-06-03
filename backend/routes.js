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


// Ruta para eliminar un producto por su ID
router.delete('/productos/:id', (req, res) => {
  const productId = req.params.id;

  // Realiza la operación de borrado en la base de datos
  const query = 'DELETE FROM producto WHERE id = ?';
  const values = [productId];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ message: 'Error al eliminar el producto' });
    } else {
      console.log('Producto eliminado exitosamente');
      res.status(200).json({ message: 'Producto eliminado exitosamente' });
    }
  });
});

// Ruta para obtener los datos de un producto por su ID
router.get('/productos/:id', (req, res) => {
  const productId = req.params.id;
  
  // Realiza la consulta a la base de datos para obtener los datos del producto por su ID
  const query = 'SELECT * FROM producto WHERE id = ?';
  const values = [productId];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al obtener los datos del producto:', error);
      res.status(500).json({ error: 'Error al obtener los datos del producto' });
    } else {
      if (results.length > 0) {
        const producto = results[0];
        res.json(producto); // Devuelve los datos del producto como respuesta
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    }
  });
});

// Ruta para actualizar un producto por su ID
router.put('/productos/:id', (req, res) => {
  const productId = req.params.id;
  const { nombre, imagen, descripcion, precio, stock } = req.body;

  // Realiza la actualización en la base de datos
  const query = 'UPDATE producto SET nombre = ?, imagen = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?';
  const values = [nombre, imagen, descripcion, precio, stock, productId];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({ message: 'Error al actualizar el producto' });
    } else {
      console.log('Producto actualizado exitosamente');
      res.status(200).json({ message: 'Producto actualizado exitosamente' });
    }
  });
});

module.exports = router;

