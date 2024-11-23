require('dotenv').config(); // Load environment variables from .env file
const express = require('express')
require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose')
const {Listing} = require('./models/listing.model.js')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const compression = require('compression')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;


console.log(process.env.MONGODB_URI);
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use(compression())
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.set('/views',path.join(__dirname,'/views'))
app.engine('ejs',ejsMate)

app.get('/',(req,res)=>{
    res.redirect('/listings')
})



//display all listings route
app.get('/listings',async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 12; // Number of listings per page
    const skip = (page - 1) * limit;

    let allListings = await Listing.find({}).skip(skip).limit(limit).lean();
    res.render('listings/index.ejs',{allListings})
})

//render new.ejs form route
app.get('/listings/new',(req,res)=>{
    res.render('listings/new.ejs')
})

//show single listing route / read / get route
app.get('/listings/:id',async (req,res)=>{
    let {id} = req.params
    let listing = await Listing.findById(id).lean()
    res.render('listings/show.ejs',{listing})
})

//create listing or post route
app.post('/listings',async(req,res)=>{
    let listing = new Listing(req.body.listing)
    await listing.save()
    res.redirect('/listings')    
})

//render new.ejs route
app.get('/listings/:id/edit',async (req,res)=>{
    let {id} = req.params
    let listing = await Listing.findById(id).lean()
    res.render('listings/edit.ejs',{listing})
})

//update route
app.put('/listings/:id',async (req,res)=>{
    let {id} = req.params
    await Listing.findOneAndUpdate({_id:id},{...req.body.listing})
    res.redirect(`/listings/${id}`)
})


//delete route
app.delete('/listings/:id',async (req,res)=>{
    let {id} = req.params
    await Listing.findByIdAndDelete(id)
    res.redirect('/listings')
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
