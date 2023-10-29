const pool = require('./queries').pool;

const getUser = (request, response) => {
    pool.query('SELECT * FROM public."user" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserByFullName = (request, response) => {
    const id = request.params.id
    pool.query('SELECT * FROM public.users WHERE full_name = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUser,
    getUserByFullName
}