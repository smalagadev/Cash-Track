const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cash-track-db"
);

const expenses = [
  // Total is 552.67
  {
    date:'07/14/19',
    time:'9:12 A.M.',
    amount:17.00,
    category:'Travel',
    description: 'Uber to Hotel'
  },
  {
    date:'07/14/19',
    time:'10:01 A.M.',
    amount:347.00,
    category:'Living',
    description: 'Hotel, 3 nights'
  },
  {
    date:'07/14/19',
    time:'2:54 P.M.',
    amount: 42.00,
    category:'Food',
    description: 'Publix'
  },
  {
    date:'07/15/19',
    time:'11:00 A.M.',
    amount:7.32,
    category:'Travel',
    description: 'Uber to Beach'
  },
  {
    date:'07/15/19',
    time:'5:48 P.M.',
    amount:29.14,
    category:'Food',
    description: 'Dinner and Show'
  },
  {
    date:'07/16/19',
    time:'3:15 P.M.',
    amount:14.14,
    category:'Food',
    description: 'Lunch'
  },
  {
    date:'07/16/19',
    time:'8:00 P.M.'',
    amount:9.23,
    category:'Travel',
    description: 'Lyft to bar area'
  },
  {
    date:'07/16/19',
    time:'1:12 A.M.',
    amount:59.97,
    category:'Entertainment',
    description: 'Drinks + Entry'
  },
  {
    date:'07/17/19',
    time:'11:52 A.M.',
    amount:7.87,
    category:'Food',
    description: 'Breakfast'
  },
  {
    date:'07/17/19',
    time:'9:12 A.M.',
    amount:19.00,
    category:'Travel',
    description: 'Uber to the airport'
  },
]

const tripSeed = [
  {
    trip_id: '1',
    created: date,
    duration: 4,
    budget: 700,
    destination: 'Key West'
  },

];

const userSeed = [
  {
    id: '1',
    email: 'demo@gmail.com',
    password: 'password'
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


  17.00+347.00+42.00+7.32+29.14+14.14+9.23+59.97+7.87+19.00
