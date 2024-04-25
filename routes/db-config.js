const sql = require("mysql2"); // Importing the mysql2 module for working with MySQl databases.
const dotenv = require("dotenv").config(); // dotenv infos.

// Creating a database connection object using values from environment variables.
const db = sql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

// Exporting the database connection object for use in other modules.
module.exports = db;