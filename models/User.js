const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
    // Auto assigned and randomized
  },
  email:{
    type: String,
    trim: true,
    required: 'Email is required.',
    match: [/.+@.+\..+/, 'Please enter a valid email address.']
  },
  password:{
    type: String,
    validate: [ input => { return input.length >= 6; }, 'Password must have at least 6 characters.']
  },
  trips: Array,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
