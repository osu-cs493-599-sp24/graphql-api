const { insertNewReservation, getReservationById } = require("../../models/reservation")

module.exports = {
  async createReservation(_, args) {
    const { start, end, userId, lodgingId } = args
    const id = await insertNewReservation(
      { start, end, userId, lodgingId }
    )
    const reservation = await getReservationById(id)
    return reservation
  }
}
