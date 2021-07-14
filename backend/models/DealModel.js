const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const DealSchema = new Schema({
  category: String,
  description: String,
  pictureURL: String,
  date: String,
  price: Number,
  promo: String,
  location: String,
  details: String,
  provider: String,
});
module.exports = model("deal", DealSchema);
