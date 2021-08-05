const Order = require("../models/OrderModel");

exports.addOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.user._id,
      orderItems: req.body,
      status: "registred",
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
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send("order not found");
    }
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
};
exports.updateOrder = async (req, res) => {
  try {
    const find = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    const order = await Order.findOne({ _id: req.params.id });
    res.send({ mesage: "the order is updated", order });
  } catch (error) {
    res.status(500).send("server error");
  }
};
