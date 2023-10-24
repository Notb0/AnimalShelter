const pool = require('./queries').pool;

const getStaff = (request, response) => {
    pool.query('SELECT *, sf.id as staff_id FROM public."Staff" as sf INNER JOIN public."Position" as pos ON sf.position_id = pos.id ORDER BY sf.id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getStaff,
}