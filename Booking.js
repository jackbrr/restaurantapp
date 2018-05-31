const mongoose = require('mongoose');

const Booking = mongoose.model(
  'Booking',
  new mongoose.Schema({
    restaurant: {
      id: String,
      name: String,
      url: String,
      location: {
        address: String,
        locality: String,
        city: String,
        city_id: Number,
        latitude: String,
        longitude: String,
        zipcode: String,
        country_id: Number,
        locality_verbose: String
      },
      cuisines: String,
      average_cost_for_two: Number,
      price_range: Number,
      currency: String,
      thumb: String,
      user_rating: {
        aggregate_rating: String,
        rating_text: String,
        rating_color: String,
        votes: String 
      },
      photos_url: String,
      menu_url: String,
      featured_image: String,
      deeplink: String,
      events_url: String 
    },
    time: String,
    date: Date,
    numPeople: Number,
    userId: String
  })
);

module.exports = Booking;
