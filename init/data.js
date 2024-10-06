const data = [
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
        price: 1200,
        location: "New York City",
        country: "United States"
    },
    {
        title: "Cozy Cottage by the Lake",
        description: "Enjoy a peaceful retreat in this charming lakeside cottage. Great for a relaxing getaway.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
        price: 900,
        location: "Lake Tahoe",
        country: "United States"
    },
    {
        title: "Luxury Penthouse in the City",
        description: "Experience high-end living in this luxurious penthouse with stunning city views.",
        image: "https://images.unsplash.com/photo-1510009489794-352fba39a0b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww",
        price: 3500,
        location: "San Francisco",
        country: "United States"
    },
    {
        title: "Beachfront Villa with Private Pool",
        description: "Relax in this stunning beachfront villa with a private pool and breathtaking ocean views.",
        image: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhfGVufDB8fDB8fHww",
        price: 4500,
        location: "Malibu",
        country: "United States"
    },
    {
        title: "Charming Cabin in the Woods",
        description: "Escape to this charming cabin nestled in the woods. Perfect for nature lovers.",
        image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbGxhfGVufDB8fDB8fHww",
        price: 700,
        location: "Asheville",
        country: "United States"
    },
    {
        title: "Modern Apartment with City View",
        description: "Stay in this modern apartment with a stunning view of the city skyline.",
        image: "https://images.unsplash.com/photo-1685648628650-63740d39bffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhfGVufDB8fDB8fHww",
        price: 1800,
        location: "Chicago",
        country: "United States"
    },
    {
        title: "Rustic Farmhouse with Garden",
        description: "Enjoy country living in this rustic farmhouse with a beautiful garden.",
        image: "https://images.unsplash.com/photo-1666456157988-4a97b08e02d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww",
        price: 1100,
        location: "Nashville",
        country: "United States"
    },
    {
        title: "Urban Studio in Historic District",
        description: "Experience the charm of the historic district in this stylish urban studio.",
        image: "https://media.istockphoto.com/id/1221865626/photo/luxurious-modern-house-with-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=JiCMrNL1me2Jd46FN2UBJU6p31-ZI6VB3DTF7dmvp0s=",
        price: 950,
        location: "Charleston",
        country: "United States"
    },
    {
        title: "Mountain Chalet with Hot Tub",
        description: "Stay in this cozy mountain chalet with a hot tub. Ideal for a winter retreat.",
        image: "https://media.istockphoto.com/id/1490668215/photo/modern-luxury-villa-with-private-pool.webp?b=1&s=170667a&w=0&k=20&c=qig43sqv2U669LbuoRWdVTQQyDF-x5GJe6QXghN8OZo=",
        price: 2000,
        location: "Aspen",
        country: "United States"
    },
    {
        title: "Secluded Cottage in the Countryside",
        description: "Unwind in this secluded cottage surrounded by picturesque countryside.",
        image: "https://media.istockphoto.com/id/1159873271/photo/residential-area-in-the-city-modern-apartment-buildings.webp?b=1&s=170667a&w=0&k=20&c=8bgBCOBBgVLLUbZeHkmhvvh52dSGsZ6_FnJ77UBwM4w=",
        price: 800,
        location: "Vermont",
        country: "United States"
    },
    {
        title: "Contemporary Loft with Rooftop Terrace",
        description: "Enjoy the cityscape from the rooftop terrace of this contemporary loft.",
        image: "https://images.unsplash.com/photo-1517542117529-b6b058a13f51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbGxhfGVufDB8fDB8fHww",
        price: 1500,
        location: "Seattle",
        country: "United States"
    },
    {
        title: "Elegant Villa in Wine Country",
        description: "Indulge in luxury at this elegant villa situated in the heart of wine country.",
        image: "https://images.unsplash.com/photo-1696087636176-b689cb60b9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhfGVufDB8fDB8fHww",
        price: 2500,
        location: "Napa Valley",
        country: "United States"
    },
    {
        title: "Historic Brownstone in City Center",
        description: "Stay in a piece of history with this beautifully restored brownstone in the city center.",
        image: "https://images.unsplash.com/photo-1509940473077-6e7950fbb0be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww",
        price: 1750,
        location: "Boston",
        country: "United States"
    },
]

module.exports = { data };