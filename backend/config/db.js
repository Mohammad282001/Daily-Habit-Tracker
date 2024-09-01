const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mis2122001:Mohammad%402128@cluster0.yj6zb.mongodb.net/DailyHabitTracker"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected successfully");
});

module.exports = db;