const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const DealSchema = new Schema({
  category: String,
  description: String,
  pictureURL: String,
  date: String,
  price: String,
  location: String,
  details: String,
});
module.exports = model("deal", DealSchema);
