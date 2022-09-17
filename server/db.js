const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Fresh3535!",
    database: "newpern",
    host: "localhost",
    port: "5432"
})

module.exports = pool;