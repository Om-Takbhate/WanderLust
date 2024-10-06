const express = require('express')
const mongoose = require('mongoose')
const {Listing} = require('./models/listing.model.js')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const path = require('path')
const app = express()
const port = 3000


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{
    res.redirect('/listings');
})



//display all listings route
app.get('/listings',async(req,res)=>{
    let allListings = await Listing.find({})
    res.render('listing/index.ejs',{allListings})
})

//render new.ejs form route
app.get('/listings/new',(req,res)=>{
    res.render('listing/new.ejs')
})

//show single listing route / read / get route
app.get('/listings/:id',async (req,res)=>{
    let {id} = req.params
    let listing = await Listing.findById(id)
    res.render('listing/show.ejs',{listing})
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
    let listing = await Listing.findById(id)
    res.render('listing/edit.ejs',{listing})
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
