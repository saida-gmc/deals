const Order = require("../models/OrderModel");

exports.addOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.user._id,
      orderItems: req.body,
    });
    const createdOrder = await newOrder.save();
    res.send({ message: "the order is saved", createdOrder });
  } catch (error) {
    res.status(500).send("server error");
    console.log(error);
  }
};
exports.getOrders = async (req, res) => {
  try {
    const orderList = await Order.find({});
    if (!orderList) {
      return res.send("no orders");
    }
    res.send(orderList);
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
