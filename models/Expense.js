const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
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
  //["food", "misc", 'travel', 'currency exchange', 'gift', 'entertainemnt', 'inconvenience', 'housing']
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
