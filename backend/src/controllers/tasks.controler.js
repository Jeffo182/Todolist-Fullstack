const tasksService = require('../services/tasks.service');

const getAll = async (_req, res) => {
    const response = await tasksService.getAll();
    return res.status(200).json(response);
};

const create = async (req, res) => {
    const createdTask = await tasksService.create(req.body);  
    return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
    const deleted = await tasksService.deleteTask(req.params);  
    if (deleted.message) {
        return res.status(400).json(deleted);
    }
    return res.status(201).json(deleted);
};

const editTask = async (req, res) => {
    const response = await tasksService.editTask(req.params, req.body);
    // if (response.message) {
    //     return res.status(400).json(response);
    // }
    return res.status(204).json(response);
};

module.exports = { getAll, create, deleteTask, editTask };