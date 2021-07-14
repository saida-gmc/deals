//require express
const express = require("express");
const app = express();

//mideleware
app.use(express.json());

//import models

//dotenv
const dotenv = require("dotenv");
dotenv.config();

//connect to DB
const connectBD = require("./config/connectDB");
connectBD();

// const deals = require("./data/deals");

const PORT = process.env.PORT;
//routes
const userRoutes = require("./routes/userRoutes");
const dealRoutes = require("./routes/dealsRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/deals", dealRoutes);
app.use("/api/users", userRoutes);
app.use("/api/confirm", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});
app.listen(5000, console.log(`server is runnig on port ${PORT}`));
