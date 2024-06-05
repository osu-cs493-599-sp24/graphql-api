const { getAllLodgings, getLodgingById } = require("../../models/lodging")
const { getReservationById } = require("../../models/reservation")
const { getUserById } = require("../../models/user")

module.exports = {
  async lodgings() {
    const lodgings = await getAllLodgings()
    return lodgings
  },

  async lodging(parent, args, contextValue, info) {
    const id = args.id
    const lodging = await getLodgingById(id)
    return lodging
  },

  async reservation(parent, args, contextValue, info) {
    const id = args.id
    const reservation = await getReservationById(id)
    return reservation
  },

  async user(parent, args, contextValue, info) {
    const id = args.id
    const user = await getUserById(id)
    return user
  }
}
