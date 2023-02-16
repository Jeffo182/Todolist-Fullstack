const { Router } = require('express');
const tasksController = require('../controllers/tasks.controler');
const { validate, validateStatus } = require('../middlewares/validateTask');

const route = Router();

route.get('/tasks', tasksController.getAll);
route.post('/tasks', validate, tasksController.create);
route.put('/tasks/:id',validate,validateStatus, tasksController.editTask);
route.delete('/tasks/:id', tasksController.deleteTask);

module.exports = {route};