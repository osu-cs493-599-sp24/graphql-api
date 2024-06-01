/*
 * Reservation data accessor methods.
 */

const { ObjectId } = require('mongodb')

const { getDb } = require('../lib/mongodb')

/*
 * Insert a new Rservation into the DB.
 */
exports.insertNewReservation = async function (reservation) {
  const db = getDb()
  const collection = db.collection('reservations')
  const result = await collection.insertOne({
    ...reservation,
    lodgingId: new ObjectId(reservation.lodgingId),
    userId: new ObjectId(reservation.userId)
  })
  return result.insertedId
}

/*
 * Fetch a Reservation from the DB based on ID.
 */
exports.getReservationById = async function (id) {
  const db = getDb()
  const collection = db.collection('reservations')
  if (!ObjectId.isValid(id)) {
      return null
  } else {
      const results = await collection
          .find({ _id: new ObjectId(id) })
          .toArray()
      return results[0]
  }
}

/*
 * Fetch all Reservations for a specific lodging by lodging ID.
 */
exports.getReservationsByLodgingId = async function (lodgingId) {
  const db = getDb()
  const collection = db.collection('reservations')
  if (!ObjectId.isValid(lodgingId)) {
      return null
  } else {
      const results = await collection
          .find({ lodgingId: new ObjectId(lodgingId) })
          .toArray()
      return results
  }
}

/*
 * Fetch all Reservations for a specific user by user ID.
 */
exports.getReservationsByUserId = async function (userId) {
  const db = getDb()
  const collection = db.collection('reservations')
  if (!ObjectId.isValid(userId)) {
      return null
  } else {
      const results = await collection
          .find({ userId: new ObjectId(userId) })
          .toArray()
      return results
  }
}
