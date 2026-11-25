const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',      // Altere se o usuário do laboratório for outro
  password: '',      // Coloque a senha do MySQL do laboratório, se houver
  database: 'biblioteca'
});

module.exports = db;
