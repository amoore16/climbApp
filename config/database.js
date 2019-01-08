if (!process.env.SECRET) { const env = require('../env.js')}; 

module.exports = {
    database: process.env.DATABASE,
    secret: process.env.SECRET
}