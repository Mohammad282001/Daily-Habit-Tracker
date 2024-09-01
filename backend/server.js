const express = require("express");
const db = require("./config/db");
const routes = require("./routes/habitRoutes"); // Ensure this is correct
const cors = require("cors");

const app = express();

app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Prefix all routes with /api
app.use("/api", routes); // Note the "/api" prefix here

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
