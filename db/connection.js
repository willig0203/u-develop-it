const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Pass@Word01Pass@Word01',
  database: 'election'
});

module.exports = db;