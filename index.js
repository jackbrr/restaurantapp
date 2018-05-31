const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('./config/db');
const Booking = require('./models/Booking');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors());

connect();

// Create a booking
app.post('/book', (req, res) => {
  new Booking(req.body).save().then(() => res.send(req.body));
});

// View bookings by userId
app.get('/bookings', (req, res) => {
  Booking.find({ userId: req.query.userId }, (err, bookings) => {
    res.status(200).send(bookings);
  });
});

app.delete('/bookings', (req, res) => {
  Booking.remove({ _id: req.query.id }).then(() => {
    res.status(200).send(req.params.id);
  })
})

app.get('/restaurant/home', (req, res) => { 
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/', (req, res) => { 
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, () =>
  console.log('Restaurant booking server started on port 3000.')
);
