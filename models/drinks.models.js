// import mongoose to enable us create drinks schema
const mongoose = require("mongoose");

//create drinks schema
const drinkSchema = new mongoose.Schema({
  drink_name: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  expiry_date: {
    type: Date,
  },
  quantity_available: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

const Drink = mongoose.model("Drink", drinkSchema);

//export model to controller
module.exports = Drink;
