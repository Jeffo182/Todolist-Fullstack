const tasksModel = require('../models/tasks.model');

const getAll = async () => {
    const response = await tasksModel.getAll();
    return response;
};

const create = async (task) => {
    const createdTask = await tasksModel.create(task);  
    return {insertId: createdTask};
};

module.exports = { getAll, create };