const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({

    //Name: String,

    //LifeSpan: String,

   // Speed: Number,

   icecream_flavour: {

        type: String,

        required: true



    },

    icecream_scoops: {

        type: String,

        required: true



    },

    icecream_cost: {

        type: Number,

        required: true,

        min : 0,

        max : 10000



    }

})
    
    

module.exports = mongoose.model("icecream",
icecreamSchema)

// const icecreamSchema = mongoose.Schema({
//     icecream_flavour: String,
//     icecream_scoops: String,
//     icecream_cost: Number
// })