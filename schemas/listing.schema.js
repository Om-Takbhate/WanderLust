const mongoose = require('mongoose')
const {Schema} = mongoose

const listingSchema = new Schema({
    title:{type:String , required:true},
    description : {type:String},
    image : {
        type:String,
        default: "https://images.unsplash.com/photo-1716807335095-8948ce6ab482?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v==="" ? "https://images.unsplash.com/photo-1716807335095-8948ce6ab482?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v
    },
    price : {type:String},
    location:{type:String},
    country : {type:String}
})

module.exports = {listingSchema}
