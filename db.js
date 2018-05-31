const mongoose = require('mongoose');

function connect() {
  const username = process.env.USERNAME || 'mmckeaveney';
  const password = process.env.PASSWORD || 'root';

  return mongoose.connect(`mongodb://${username}:${password}@ds137650.mlab.com:37650/restaurant-booking`).then(() => {
    console.log("Connected to MongoDB...")
  });
}

exports.connect = connect;
