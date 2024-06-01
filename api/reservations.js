const { Router } = require('express')

const {
    insertNewReservation,
    getReservationById
} = require('../models/reservation')

const router = Router()

router.post('/', async function (req, res, next) {
    try {
        const id = await insertNewReservation(req.body)
        res.status(201).send({ id: id })
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    try {
        const reservation = await getReservationById(id)
        if (reservation) {
            res.status(200).send(reservation)
        } else {
            next()
        }
    } catch (e) {
        next(e)
    }
})

module.exports = router
