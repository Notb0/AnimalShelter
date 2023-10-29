const pool = require('./queries').pool;

const getPets = (request, response) => {
    pool.query('SELECT * FROM public."Pets" WHERE avaliable = true ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPetsAll = (request, response) => {
    pool.query('SELECT * FROM public."Pets" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createPets = (name, breed, gender, age) => {
    pool.query('INSERT INTO public."Pets" (name, breed, gender, age, avaliable) VALUES ($1, $2, $3, $4, $5)', 
    [name, breed, gender, age, 1], (error, results, fields) => {
        if (error) {
            throw error
        }
    })
}


const deletePets = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public."Pets" WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
    })
}

module.exports = {
    getPets,
    getPetsAll,
    createPets,
    deletePets
}