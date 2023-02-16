const { app } = require('./app');
require('dotenv').config();



const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Tudo certo, servidor rodando na porta ${PORT}.`));
