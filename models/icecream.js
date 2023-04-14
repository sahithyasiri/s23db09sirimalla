const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    icecream_flavour: String,
    icecream_scoops: String,
    icecream_cost: Number
})
module.exports = mongoose.model("icecream",
icecreamSchema)