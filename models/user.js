/*
 * User data accessor methods.
 */

const { ObjectId } = require('mongodb')

const bcrypt = require('bcryptjs')

const { getDb } = require('../lib/mongodb')

/*
 * Insert a new User into the DB.
 */
exports.insertNewUser = async function (user) {
    const db = getDb()
    const collection = db.collection('users')
    const hash = await bcrypt.hash(user.password, 8)
    const result = await collection.insertOne({
        ...user,
        password: hash
    })
    return result.insertedId
}
