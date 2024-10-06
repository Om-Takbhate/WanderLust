const mongoose = require('mongoose')
const {Schema} = mongoose

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


const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image : {
        type:String,
        default: 'https://dbsamoa.ws/wp-content/uploads/2022/08/Not-available.jpg',
        set : (link) => (link==='') ? 'https://dbsamoa.ws/wp-content/uploads/2022/08/Not-available.jpg' : link
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String,
        set:(name)=>name.toLowerCase(),
    }
})

module.exports = {
    listingSchema
}