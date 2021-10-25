const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sunbeam',
  password: 'sunbeam',
  database: 'ars',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool