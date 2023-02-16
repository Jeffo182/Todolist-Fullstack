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

const deleteTask = async ({id}) => {
    const [{affectedRows}] = await connection.execute('DELETE FROM todolist.tasks WHERE id = ?', [id]);
    return affectedRows;
};

const editTask = async ({id}, task) => {
    const { title, status } = task;
    const [response] = await connection.execute('UPDATE todolist.tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    return response;
};


module.exports = { getAll, create, deleteTask, editTask };