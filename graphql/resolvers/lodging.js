const { getReservationsByLodgingId } = require("../../models/reservation")
const { getUserById } = require("../../models/user")

module.exports = {
  id(parent) {
    return parent._id
  },
  async reservations(parent) {
    const reservations = await getReservationsByLodgingId(
      parent._id
    )
    return reservations
  },

  async owner(parent) {
    const user = await getUserById(parent.ownerId)
    return user
  }
}
