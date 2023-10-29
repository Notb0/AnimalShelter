const pool = require('./queries').pool;

const getApplication = (request, response) => {
    pool.query(
        `SELECT 
            public."Application".id as id,
            public.users.full_name as user,
            public.users.phone_number as phone_number,
            public."Pets".name as pets,
            public."Application".date as date
        FROM public."Application" 
        INNER JOIN 
            public.users ON public.users.id = public."Application".user_id 
        INNER JOIN 
            public."Pets" ON public."Pets".id = public."Application".pets_id 
        ORDER BY public."Application".id ASC`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const deleteApplication = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public."Application" WHERE id = $1 RETURNING pets_id', [id], (error, results) => {
        if (error) {
            throw error
        }
        pool.query('UPDATE public."Pets" SET avaliable = $1 WHERE id = $2', 
        [true, results.rows[0].pets_id], (error, results) => {
            if (error) {
                throw error
            }
        })
    })
}

const createApplication = (request, response) => {
    const {full_name, dateBirth,phone,address, petsId} = request.body
    pool.query('Select id from public.Users WHERE full_name = $1', 
    [full_name], (error, results) => {
        if(results.rows.length === 0){
            pool.query('INSERT INTO public.Users (full_name, date_of_birth, phone_number, address) VALUES ($1, $2, $3, $4) RETURNING id', 
            [full_name, dateBirth,phone,address], (error, results) => {
                if (error) {
                } else{
                    pool.query('UPDATE public."Pets" SET avaliable = $1 WHERE id = $2', 
                    [false, petsId], (error, results) => {
                        if (error) {
                            throw error
                        }
                    })
        
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
        } else{
            pool.query('UPDATE public."Pets" SET avaliable = $1 WHERE id = $2', 
            [false, petsId], (error, results) => {
                if (error) {
                    throw error
                }
            })

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
    createApplication,
    deleteApplication,
}