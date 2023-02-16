const { Router } = require('express');

const route = Router();

route.get('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));
// route.post('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));
// route.put('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));
// route.delete('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));

module.exports = {route};