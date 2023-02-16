const { Router } = require('express');
const tasksController = require('../controllers/tasks.controler');

const route = Router();

route.get('/tasks', tasksController.getAll);
// route.post('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));
// route.put('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));
// route.delete('/tasks', (req, res) => res.status(200).json({message: 'Testando app'}));

module.exports = {route};