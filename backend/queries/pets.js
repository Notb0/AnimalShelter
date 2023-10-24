const pool = require('./queries').pool;

const getPets = (request, response) => {
    pool.query('SELECT * FROM public."Pets" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getPets,
}