const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Expense = new Schema({
  index:{
    type: Number,
    unique: true
    // Auto assign
    // Incremental and default at 0
  },
  trip_id:
  {
    type: Number
    // Auto assign
    // Imported/inherited from Trips.
  },
  date:{
    type: Date,
    default: Date.now
  },
  time:{
    // Same as date but specified for time
  },
  amount_spent:{
    type: Number
    // Specified for money
  },
  category: Array
  //["food", "misc", 'travel', 'currency exchange', 'gift', 'ticket', 'inconvenience', 'housing', 'hygiene']
});

// const Expense = mongoose.model('', Schema);

module.exports = Expense;
