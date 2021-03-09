const mysql = require('mysql');

module.exports = {
    // MYSQL CONNECTION 
    pool: mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'shayon',
        password: 'shayon',
        database: 'node_mysql'
    })
}