const tasksService = require('../services/tasks.service');

const getAll = async (_req, res) => {
    const response = await tasksService.getAll();
    return res.status(200).json(response);
};

const create = async (req, res) => {
    const createdTask = await tasksService.create(req.body);  
    return res.status(201).json(createdTask);
};

module.exports = { getAll, create };