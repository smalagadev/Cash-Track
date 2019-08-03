const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const Trips = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  user_id:{
    type: Number
    // ref to User id
  },
  created:{
    type: Date,
    default: Date.now
  },
  expiration:{
    type: Date
    // default two weeks from created
  },
  budget:{
    type: Number
    // Type of money
  },
  // current_budget:{
  //   type: Number
  //   // Type of money
  // },
  active: Boolean,
  entries: Array
});

// const Trip = mongoose.model('', Schema)

module.exports = Trip;
