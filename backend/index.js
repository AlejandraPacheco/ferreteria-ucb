const express = require('express');
const app = express();
const cors = require('cors'); // Importar el middleware de CORS
const db = require('./bdd');

// Configurar Express para recibir solicitudes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar Express para permitir solicitudes CORS desde el origen http://localhost:3000
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:7777');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT'); // Incluye PUT en la lista de métodos permitidos
  next();
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const router = require('./routes');

// Utilizar el enrutador para manejar todas las solicitudes
app.use(router);

// Permitir todas las solicitudes desde cualquier origen
app.use(cors({
  origin: 'http://localhost:7777', // Reemplaza con la URL de tu cliente
  methods: ['GET', 'PUT', 'POST'], // Especifica los métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Especifica los encabezados permitidos
}));


// Inicio del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3001');
});