const tasksModel = require('../models/tasks.model');

const getAll = async () => {
    const response = await tasksModel.getAll();
    return response;
};

module.exports = { getAll};