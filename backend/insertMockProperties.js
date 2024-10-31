const mongoose = require('mongoose');
const Property = require('./models/Property');

// Database connection
mongoose.connect('mongodb://localhost:27017/real_estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database connected"))
.catch((err) => console.error("Database connection error:", err));

// Mock property data
const properties = [
  { title: "Luxury Villa", description: "A luxurious villa with sea view.", price: 2000000, location: "California", images: ["https://example.com/image1.jpg"], isFeatured: true },
  { title: "Modern Apartment", description: "A modern apartment in the city center.", price: 750000, location: "New York", images: ["https://example.com/image2.jpg"], isFeatured: false },
  { title: "Beach House", description: "A beautiful house by the beach.", price: 1500000, location: "Miami", images: ["https://example.com/image3.jpg"], isFeatured: true },
  { title: "Mountain Retreat", description: "A cozy retreat in the mountains.", price: 500000, location: "Colorado", images: ["https://example.com/image4.jpg"], isFeatured: false },
  { title: "Penthouse Suite", description: "An exclusive penthouse with skyline view.", price: 2500000, location: "Chicago", images: ["https://example.com/image5.jpg"], isFeatured: true },
  { title: "Suburban Home", description: "A family home in a quiet neighborhood.", price: 600000, location: "Austin", images: ["https://example.com/image6.jpg"], isFeatured: false },
  { title: "Countryside Cottage", description: "A charming cottage in the countryside.", price: 300000, location: "Vermont", images: ["https://example.com/image7.jpg"], isFeatured: false },
  { title: "Downtown Loft", description: "A stylish loft in the downtown area.", price: 850000, location: "San Francisco", images: ["https://example.com/image8.jpg"], isFeatured: true },
  { title: "Historic Mansion", description: "A beautiful mansion with historical value.", price: 5000000, location: "Boston", images: ["https://example.com/image9.jpg"], isFeatured: true },
  { title: "Modern Bungalow", description: "A comfortable bungalow with modern amenities.", price: 400000, location: "Orlando", images: ["https://example.com/image10.jpg"], isFeatured: false },
  { title: "Lake House", description: "A peaceful house by the lake.", price: 950000, location: "Minnesota", images: ["https://example.com/image11.jpg"], isFeatured: true },
  { title: "Urban Studio", description: "A compact studio in a vibrant neighborhood.", price: 300000, location: "Seattle", images: ["https://example.com/image12.jpg"], isFeatured: false },
  { title: "Eco-Friendly Home", description: "A sustainable and eco-friendly home.", price: 700000, location: "Portland", images: ["https://example.com/image13.jpg"], isFeatured: true },
  { title: "Luxury Condo", description: "A high-end condo with all facilities.", price: 1200000, location: "Atlanta", images: ["https://example.com/image14.jpg"], isFeatured: false },
  { title: "Secluded Villa", description: "A private villa with ocean view.", price: 1800000, location: "San Diego", images: ["https://example.com/image15.jpg"], isFeatured: true },
  { title: "Country Farmhouse", description: "A spacious farmhouse with land.", price: 450000, location: "Texas", images: ["https://example.com/image16.jpg"], isFeatured: false },
  { title: "Ski Cabin", description: "A cozy cabin near ski resorts.", price: 650000, location: "Utah", images: ["https://example.com/image17.jpg"], isFeatured: true },
  { title: "Riverside Cottage", description: "A scenic cottage by the river.", price: 350000, location: "Missouri", images: ["https://example.com/image18.jpg"], isFeatured: false },
  { title: "Luxury Duplex", description: "A two-story duplex in a prime area.", price: 1000000, location: "Phoenix", images: ["https://example.com/image19.jpg"], isFeatured: true },
  { title: "City Penthouse", description: "A top-floor penthouse in the city.", price: 2700000, location: "Las Vegas", images: ["https://example.com/image20.jpg"], isFeatured: true }
];

// Insert mock data
Property.insertMany(properties)
  .then(() => {
    console.log("Mock properties inserted successfully!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error inserting mock properties:", error);
    mongoose.connection.close();
  });