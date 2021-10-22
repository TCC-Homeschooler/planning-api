const pgp = require('pg-promise')();
const db = pgp({
    username: 'postgres',
    password: 'Info@1234',
    host: 'localhost',
    port: 5432,
    database: 'planning',
    schema: 'planning'
});

module.exports = db;