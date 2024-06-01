const { Router } = require('express')

const {
    getAllLodgings,
    insertNewLodging,
    getLodgingById
} = require('../models/lodging')
const { getReservationsByLodgingId } = require('../models/reservation')

const router = Router()

router.get('/', async function (req, res, next) {
    try {
        const lodgings = await getAllLodgings()
        res.status(200).send({ lodgings: lodgings })
    } catch (e) {
        next(e)
    }
})

router.post('/', async function (req, res, next) {
    try {
        const id = await insertNewLodging(req.body)
        res.status(201).send({ id: id })
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async function (req, res, next) {
    const id = req.params.id
    try {
        const lodging = await getLodgingById(id)
        if (lodging) {
            res.status(200).send(lodging)
        } else {
            next()
        }
    } catch (e) {
        next(e)
    }
})

router.get('/:id/reservations', async function (req, res, next) {
    const id = req.params.id
    try {
        const lodgings = await getReservationsByLodgingId(id)
        res.status(200).send({ lodgings: lodgings })
    } catch (e) {
        next(e)
    }
})

module.exports = router
