const mongoose = require('mongoose')
const {Listing} = require('../models/listing.model.js')
const {data} = require('./data.js')

main()
    .then(()=>{
        console.log(`DB connection successful`)
    })
    .catch((err)=>{
        console.log(err.message)
    })

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/WanderLust2')
}


const initDB = async function(){
    await Listing.deleteMany()
    await Listing.insertMany(data)
    console.log(`Data was saved`)
}


initDB()