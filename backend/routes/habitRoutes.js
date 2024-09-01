const express = require("express");
const habitController = require("../controllers/habitController");

const router = express.Router();

// Define routes and map them to controller functions
router.post("/newHabit", habitController.createHabit);
router.get("/habits", habitController.getAllHabits);
router.put("/habits/:id", habitController.updateHabit);
router.delete("/habits/:id", habitController.deleteHabit);




module.exports = router;
