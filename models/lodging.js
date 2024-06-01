/*
 * Lodging data accessor methods.
 */

const { ObjectId } = require('mongodb')

const { getDb } = require('../lib/mongodb')

/*
 * Insert a new Lodging into the DB.
 */
exports.insertNewLodging = async function (lodging) {
  const db = getDb()
  const collection = db.collection('lodgings')
  const result = await collection.insertOne({
    ...lodging,
    ownerId: new ObjectId(lodging.ownerId)
  })
  return result.insertedId
}

/*
 * Fetch all lodgings from the DB.
 */
exports.getAllLodgings = async function () {
  const db = getDb()
  const collection = db.collection("lodgings")
  const lodgings = await collection.find({}).toArray()
  return lodgings
}

/*
 * Fetch a Lodging from the DB based on ID.
 */
exports.getLodgingById = async function (id) {
  const db = getDb()
  const collection = db.collection('lodgings')
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
 * Fetch all Lodgings for a specific owner by user ID.
 */
exports.getLodgingsByOwnerId = async function (ownerId) {
  const db = getDb()
  const collection = db.collection('lodgings')
  if (!ObjectId.isValid(ownerId)) {
      return null
  } else {
      const results = await collection
          .find({ ownerId: new ObjectId(ownerId) })
          .toArray()
      return results
  }
}
