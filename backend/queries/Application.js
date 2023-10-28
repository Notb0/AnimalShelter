const pool = require('./queries').pool;

const getApplication = (request, response) => {
    pool.query('SELECT * FROM public.Application ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createApplication = (request, response) => {
    const {full_name, dateBirth,phone,address, petsId} = request.body
    pool.query('INSERT INTO public.Users (full_name, date_of_birth, phone_number, address) VALUES ($1, $2, $3, $4) RETURNING id', 
    [full_name, dateBirth,phone,address], (error, results) => {
        if (error) {
        } else{
            pool.query('INSERT INTO public."Application" (user_id, pets_id, date) VALUES ($1, $2, now())', 
            [results.rows[0].id, petsId], (error, results) => {
                if (error) {
                    throw error
                } else{
                    response.status(201).send(true)
                }
            })
        }
    })

}

module.exports = {
    getApplication,
    createApplication
}