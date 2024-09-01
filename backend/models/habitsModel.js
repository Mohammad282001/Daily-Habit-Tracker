//Habit model.js

const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  habitName: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
