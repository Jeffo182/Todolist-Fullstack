const tasksModel = require('../models/tasks.model');

const getAll = async () => {
    const response = await tasksModel.getAll();
    return response;
};

const create = async (task) => {
    const createdTask = await tasksModel.create(task);  
    return {insertId: createdTask};
};

const deleteTask = async (id) => {
    const response = await tasksModel.deleteTask(id);
    if (response === 0 || undefined) {
        return {message: 'Id nao existe no banco de dados'};
    }
    return {affectedRows: response};
};

const editTask = async (id, task) => {
    const response = await tasksModel.editTask(id, task);
    // if (response === 0 || undefined) {
    //     return {message: 'Id nao existe no banco de dados'};
    // }
    return response;
};

module.exports = { getAll, create, deleteTask, editTask };