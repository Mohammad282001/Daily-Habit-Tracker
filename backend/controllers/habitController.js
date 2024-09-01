const Habit = require("../models/habitsModel");
exports.createHabit = async (req, res) => {
  const { habitName, description, category, status } = req.body;
  try {
    const habit = new Habit({ habitName, description, category, status });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create habit", error });
  }
};

exports.getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find({});
    res.send(habits);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.updateHabit = async (req, res) => {
  const { id } = req.params;
  const { habitName, description, category, status } = req.body;
  try {
    const habit = await Habit.findByIdAndUpdate(
      id,
      { habitName, description, category, status },
      { new: true }
    );
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.status(200).json(habit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update habit", error });
  }
};

exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  try {
    const habit = await Habit.findByIdAndDelete(id);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.status(200).json({ message: "Habit deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete habit", error });
  }
};