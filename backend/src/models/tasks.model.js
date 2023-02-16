const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM todolist.tasks');
    return tasks;
};

const create = async (task) => {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    console.log(dateUTC);
    const query = 'INSERT INTO todolist.tasks(title, status, created_at) VALUES (?, ?, ?)';
    const [{insertId}] = await connection.execute(query, [title, 'pendente', dateUTC]);  
    return insertId;
};

module.exports = { getAll, create };