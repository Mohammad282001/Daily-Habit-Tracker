// const express = require("express");
// const db = require("./config/db");
// const routes = require("./routes/habitRoutes"); // Ensure this is correct
// const cors = require("cors");

// const app = express();

// app.use(cors());

// // Parse JSON bodies
// app.use(express.json());

// // Prefix all routes with /api
// app.use("/api", routes); // Note the "/api" prefix here

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });





function solve(a, b, n) {
  let result;
  // console.log("a => " + a);
  // console.log("b => " + b);
  let resultA = b;
  if (n == 1) return b;
  for (let i = 1; i < n; i++) {
    result = a + b;
    // console.log("a => " + result + " b => " + resultA);
    // console.log("result"+result)
    // console.log();
    a = b;
    b = result;

    // result = a + b; // 10 11 21
    // console.log("result => " + result);
    // b = a; // 1 10
    // a = result; // 10 11
    // console.log("a => " + a);
    // console.log("b => " + b);
  }
  return result;
}

console.log(solve(9, 1, 7));