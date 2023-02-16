const tasksService = require('../services/tasks.service');

const getAll = async (_req, res) => {
    const response = await tasksService.getAll();
    return res.status(200).json({message: response});
};

module.exports = { getAll };