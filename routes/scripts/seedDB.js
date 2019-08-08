const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cash-track-db"
);

const tripSeed = [
  {
    trip_id: '1',
    created: date,
    expiration: date,
    budget: 500,
    active: true,
  },
  {
    trip_id: '2',
    created: date,
    expiration: date,
    budget: 1000,
    active: true,
  },
  {
    trip_id: '3',
    created: date,
    expiration: date,
    budget: 1500,
    active: true,
  },
  {
    trip_id: '4',
    created: date,
    expiration: date,
    budget: 2500,
    active: true,
  },
  {
    trip_id: '5',
    created: date,
    expiration: date,
    budget: 3500,
    active: true,
  },
  {
    trip_id: '6',
    created: date,
    expiration: date,
    budget: 4500,
    active: true,
  },
  {
    trip_id: '7',
    created: date,
    expiration: date,
    budget: 5500,
    active: true,
  },
  {
    trip_id: '8',
    created: date,
    expiration: date,
    budget: 6500,
    active: true,
  },
  {
    trip_id: '9',
    created: date,
    expiration: date,
    budget: 2500,
    active: true,
  },
  {
    trip_id: '10',
    created: date,
    expiration: date,
    budget: 3500,
    active: true,
  },
  {
    trip_id: '11',
    created: date,
    expiration: date,
    budget: 4500,
    active: true,
  },
  {
    trip_id: '12',
    created: date,
    expiration: date,
    budget: 5500,
    active: true,
  },
  {
    trip_id: '13',
    created: date,
    expiration: date,
    budget: 6500,
    active: true,
  },
  {
    trip_id: '14',
    created: date,
    expiration: date,
    budget: 7500,
    active: true,
  },
  {
  
    trip_id: '15',
    created: date,
    expiration: date,
    budget: 8500,
    active: true,
  },
  {
    trip_id: '16',
    created: date,
    expiration: date,
    budget: 9500,
    active: true,
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });