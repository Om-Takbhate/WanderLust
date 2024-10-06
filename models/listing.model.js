const mongoose = require('mongoose')
const {listingSchema} = require('../schemas/listing.schema.js')



const Listing = mongoose.model('Listing',listingSchema)

module.exports = {
    Listing
}