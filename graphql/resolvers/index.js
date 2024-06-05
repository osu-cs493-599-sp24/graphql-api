const queryResolvers = require("./query")
const lodgingResolvers = require("./lodging")
const mutationResolvers = require("./mutation")

module.exports = {
  Query: queryResolvers,
  Lodging: lodgingResolvers,
  Mutation: mutationResolvers
}
