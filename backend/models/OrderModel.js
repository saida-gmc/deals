const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  orderItems: {
    description: { type: String, required: true },
    qty: { type: Number, required: true },
    pictureURL: { type: String, required: true },
    price: { type: Number, required: true },
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "deal",
    },
    location: { type: String, required: true },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
});

module.exports = model("order", OrderSchema);
