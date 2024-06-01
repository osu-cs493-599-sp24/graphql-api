
const { Router } = require('express')

const { insertNewUser } = require('../models/user')
const { getReservationsByUserId } = require('../models/reservation')
const { getLodgingsByOwnerId } = require('../models/lodging')

const router = Router()

router.post('/', async function (req, res) {
    try {
        const id = await insertNewUser(req.body)
        res.status(201).send({ id: id })
    } catch (e) {
        next(e)
    }
})

router.get('/:id/reservations', async function (req, res, next) {
    const id = req.params.id
    try {
        const reservations = await getReservationsByUserId(id)
        res.status(200).send({ reservations: reservations })
    } catch (e) {
        next(e)
    }
})

router.get('/:id/lodgings', async function (req, res, next) {
    const id = req.params.id
    try {
        const lodgings = await getLodgingsByOwnerId(id)
        res.status(200).send({ lodgings: lodgings })
    } catch (e) {
        next(e)
    }
})

module.exports = router
