const pool = require('./queries').pool;

const getSponsors = (request, response) => {
    pool.query('SELECT *, sp.id as sponsors_id FROM public."Sponsors" as sp INNER JOIN public."Type_help" as th ON sp.type_help_id = th.id ORDER BY sp.date ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createSponsor = (request, response) => {
    const {full_name, type} = request.body

    pool.query('INSERT INTO public."Sponsors" (full_name, type_help_id, date) VALUES ($1, $2, $3)', 
    [full_name, type, Date.now()], (error, results) => {
        if (error) {
            throw error
        } else{
            response.status(201).send(results.rows[0].id)
        }
    })
}

module.exports = {
    getSponsors,
    createSponsor,
}