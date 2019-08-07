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

const userSeed = [
  {
    id: '1',
    email: 'mr.battle@gmail.com',
    password: 'password',
    trips: ['San Francisco, Miami, Las Vegas'],
  },
  {
    id: '2',
    email: 'mr.zeru@gmail.com',
    password: 'password',
    trips: ['Chicago, New York'],
  },
  {
    id: '3',
    email: 'mr.steffano@yahoo.com',
    password: 'password',
    trips: ['LA, DC'],
  },
  {
    id: '4',
    email: 'mr.stanley@gmail.com',
    password: 'password',
    trips: ['Philadelphia, Phoenix'],
  },
  {
    id: '5',
    email: 'mr.jaden@icloud.com',
    password: 'password',
    trips: ['Boston, Cleveland'],
  },
  {
    id: '6',
    email: 'mr.matt@yahoo.com',
    password: 'password',
    trips: ['Houston, Dallas, San Antonio'],
  },
  {
    id: '7',
    email: 'adam@gmail.com',
    password: 'password',
    trips: ['Toronto, Miami'],
  },
  {
    id: '8',
    email: 'miguel@icloud.com',
    password: 'password',
    trips: ['Miami, Daytona'],
  },
  {
    id: '9',
    email: 'lauren@icloud.com',
    password: 'password',
    trips: ['Ceveland, Brooklyn'],
  },
  {
    id: '10',
    email: 'mr.daivis@gmail.com',
    password: 'password',
    trips: ['Charlotte, Portland'],
  },
]


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