
const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './db/store.db'
})

module.exports = db;